import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xq-ma4m_x {
  fill: currentColor;
  d: path("M4 2.5a.5.5 0 0 0-1 0v12A3.5 3.5 0 0 0 6.5 18h7a3.5 3.5 0 0 0 3.5-3.5v-12a.5.5 0 0 0-1 0V6H4zM4 10V7h12v3z");
}
</style><path class="xq-ma4m_x"/>`,
		"fallback": "fluent:eraser-tool-20-filled",
	});
}

export default Component;
