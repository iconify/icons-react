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
		"content": `<style>.ijtzx6blf {
  fill: var(--svg-color--00e789, #00e789);
  d: path("m10.525 14.767l1.477 2.048V21L6.6 18.688V7.791c0-.394.156-.773.432-1.052a1.47 1.47 0 0 1 1.044-.436l5.204 7.22l2.647 1.626v-8.98L13.478 5.12v6.148l-1.476-2.05V3L17.4 5.315v10.106c0 .394-.155.773-.432 1.052a1.47 1.47 0 0 1-1.044.437l-3.755-2.397l-4.09-5.677v8.996l2.446 1.046z");
}
</style><path class="ijtzx6blf"/>`,
		"fallback": "token-branded:enuls",
	});
}

export default Component;
