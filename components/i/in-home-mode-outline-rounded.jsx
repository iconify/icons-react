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
		"content": `<style>.xkht8gbww {
  fill: currentColor;
  d: path("M6 20q-.825 0-1.412-.587T4 18v-7.375L3 11.4q-.325.25-.737.2t-.663-.4q-.25-.325-.187-.725t.387-.65l8.975-6.9q.275-.2.588-.3t.637-.1t.638.1t.587.3L22.2 9.8q.325.25.388.65t-.188.75t-.65.388t-.75-.213L12 4.5L6 9.1V18h2.025q.425 0 .7.288T9 19t-.288.713T8 20zm8.55 1.5q-.175-.075-.325-.225L11.4 18.45q-.3-.3-.3-.7t.3-.7t.7-.3t.7.3l2.125 2.1l4.95-4.95q.3-.3.713-.287t.712.312t.3.7t-.3.7l-5.675 5.65q-.15.15-.325.225t-.375.075t-.375-.075");
}
</style><path class="xkht8gbww"/>`,
		"fallback": "material-symbols:in-home-mode-outline-rounded",
	});
}

export default Component;
