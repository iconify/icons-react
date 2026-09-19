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
		"content": `<style>.rnr15yq7m {
  cx: 12px;
  cy: 12px;
  r: 8px;
  fill: currentColor;
}
</style><circle class="rnr15yq7m"/>`,
		"fallback": "ic:fiber-manual-record",
	});
}

export default Component;
