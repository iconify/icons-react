import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tnrx9hbxa {
  fill: var(--svg-color--ff875b, #ff875b);
  d: path("M14.316 3.9H9.684a.286.286 0 0 0-.282.284c-.094 4.42-2.37 8.617-6.287 11.589a.29.29 0 0 0-.062.399l2.71 3.808c.093.13.272.16.399.064c2.449-1.846 4.42-4.073 5.838-6.542c1.419 2.469 3.389 4.696 5.838 6.542a.28.28 0 0 0 .398-.064l2.71-3.808a.29.29 0 0 0-.061-.4c-3.917-2.971-6.193-7.167-6.287-11.588a.285.285 0 0 0-.282-.284");
}
</style><path class="tnrx9hbxa"/>`,
		"fallback": "token-branded:argent",
	});
}

export default Component;
