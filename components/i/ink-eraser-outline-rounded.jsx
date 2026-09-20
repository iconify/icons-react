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
		"content": `<style>.n0r2t8bis {
  fill: currentColor;
  d: path("M17.25 18H21q.425 0 .713.288T22 19t-.288.713T21 20h-5.75zM5.175 20q-.2 0-.388-.075T4.45 19.7l-1.825-1.825q-.575-.575-.588-1.425T2.6 15l11-11.4q.575-.6 1.412-.6t1.413.575L21.4 8.55q.575.575.575 1.425T21.4 11.4l-8.1 8.3q-.15.15-.337.225t-.388.075zm6.975-2L20 9.95L15.05 5L4 16.4L5.6 18zM12 12");
}
</style><path class="n0r2t8bis"/>`,
		"fallback": "material-symbols:ink-eraser-outline-rounded",
	});
}

export default Component;
