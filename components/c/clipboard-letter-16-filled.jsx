import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.k3lcwabfx {
  d: path("M11.49 7.005a.5.5 0 0 0-.458.303l-2.115 4.943a.5.5 0 0 0-.046.107l-.835 1.95a.5.5 0 1 0 .92.394L9.683 13h3.621l.73 1.702a.5.5 0 0 0 .92-.394l-.837-1.95a.5.5 0 0 0-.046-.107l-2.12-4.943a.5.5 0 0 0-.46-.303m0 1.77L12.876 12h-2.764z");
}

.tgknekbuc {
  d: path("M5.085 2A1.5 1.5 0 0 1 6.5 1h3a1.5 1.5 0 0 1 1.415 1h.585A1.5 1.5 0 0 1 13 3.5v3.716l-.13-.302a1.5 1.5 0 0 0-2.757 0l-2.1 4.904q-.045.09-.079.187l-.817 1.91A1.5 1.5 0 0 0 7.08 15H4.5A1.5 1.5 0 0 1 3 13.5v-10A1.5 1.5 0 0 1 4.5 2zM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z");
}
</style><g class="cuyn6tgcc"><path class="tgknekbuc"/><path class="k3lcwabfx"/></g>`,
		"fallback": "fluent:clipboard-letter-16-filled",
	});
}

export default Component;
