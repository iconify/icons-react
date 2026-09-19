import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vb_vbgbqn {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 20.5px;
  ry: 7.5px;
}

.w5un1bcyv {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7.5px;
  ry: 20.5px;
}
</style><ellipse class="w5un1bcyv"/><ellipse transform="rotate(-60 24 24)" class="w5un1bcyv"/><ellipse transform="rotate(-30 24 24)" class="vb_vbgbqn"/>`,
		"fallback": "arcticons:ai-chat-alt-2",
	});
}

export default Component;
