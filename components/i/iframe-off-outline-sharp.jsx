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
		"content": `<style>.n3sfci71t {
  fill: currentColor;
  d: path("M21.104 22.53L17.573 19H3V5h2v1.427l-3.12-3.12l.714-.713l19.223 19.223zM4 18h12.573l-10-10H4zm16-.812V8h-9.188l-3-3H21v13.189zm-2.308-2.307l-.884-.885v-2.804h-2.804l-.885-.884h4.573z");
}
</style><path class="n3sfci71t"/>`,
		"fallback": "material-symbols-light:iframe-off-outline-sharp",
	});
}

export default Component;
