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
		"content": `<style>.i4hxffrur {
  cx: 12px;
  cy: 12px;
  r: 10px;
  fill: currentColor;
}
</style><circle class="i4hxffrur"/>`,
		"fallback": "ic:baseline-brightness-1",
	});
}

export default Component;
