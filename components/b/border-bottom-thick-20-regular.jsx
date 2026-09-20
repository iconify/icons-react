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
		"content": `<style>.wz2enij9l {
  fill: currentColor;
  d: path("M8 3.75A.75.75 0 0 1 8.75 3h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 8 3.75m.711 11.751l.039-.001h2.5l.039.001H14a1.5 1.5 0 0 0 1.426-1.032l.003-.01a.75.75 0 0 1 1.382.585h.003A3 3 0 0 1 14 17.001H6c-1.29 0-2.39-.814-2.814-1.957h.005a.75.75 0 1 1 1.413-.492A1.5 1.5 0 0 0 6 15.5zM4.604 5.449a1.5 1.5 0 0 1 .939-.878a.75.75 0 0 0-.586-1.38v-.005a3 3 0 0 0-1.77 1.77h.004a.75.75 0 1 0 1.413.493m9.944-.846c.387.151.696.46.85.846q.012.048.032.094a.75.75 0 0 0 1.38-.586h.005a3 3 0 0 0-1.77-1.77v.004a.75.75 0 1 0-.497 1.412M3 11.25a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0zm13.25.75a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75");
}
</style><path class="wz2enij9l"/>`,
		"fallback": "fluent:border-bottom-thick-20-regular",
	});
}

export default Component;
