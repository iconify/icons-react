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
		"content": `<style>.orjmhabwv {
  fill: currentColor;
  d: path("M12 6.616q.262 0 .439-.177T12.615 6t-.177-.438T12 5.385t-.438.177t-.177.438t.177.439t.438.177m-.5 7.807h1V8.346h-1zM3 20.077V4.616q0-.691.463-1.153T4.615 3h14.77q.69 0 1.152.463T21 4.616v10.769q0 .69-.463 1.153T19.385 17H6.077z");
}
</style><path class="orjmhabwv"/>`,
		"fallback": "material-symbols-light:chat-info",
	});
}

export default Component;
