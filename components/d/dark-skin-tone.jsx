import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kwv23tbku {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--8a6859, #8a6859);
}
</style><circle class="kwv23tbku"/>`,
		"fallback": "emojione:dark-skin-tone",
	});
}

export default Component;
