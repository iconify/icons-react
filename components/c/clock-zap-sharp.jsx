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
		"content": `<style>.wjb9aiboz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 22L12 22C6.4771 22 2 17.5228 2 12C2 6.4771 6.4771 2 12 2C17.5228 2 22 6.4771 22 12L22 13M12 5L12 12L18 12M20.2929 15.7071L17 19L21 19L17.7071 22.2929");
}
</style><path class="wjb9aiboz"/>`,
		"fallback": "keyline-icons:clock-zap-sharp",
	});
}

export default Component;
