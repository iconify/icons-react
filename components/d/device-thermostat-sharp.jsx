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
		"content": `<style>.hg9aomb6s {
  fill: currentColor;
  d: path("M9.165 19.836Q8 18.67 8 17q0-1.084.535-1.997q.534-.913 1.465-1.465V5q0-.846.577-1.423T12 3t1.423.577T14 5v8.539q.93.552 1.466 1.464Q16 15.916 16 17q0 1.671-1.164 2.836Q13.67 21 12 21t-2.835-1.164M11 11.385h2v-1.5h-1v-.77h1v-2.23h-1v-.77h1V5q0-.425-.288-.712T12 4t-.712.288T11 5z");
}
</style><path class="hg9aomb6s"/>`,
		"fallback": "material-symbols-light:device-thermostat-sharp",
	});
}

export default Component;
