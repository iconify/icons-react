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
		"content": `<style>.u7-mj1m6w {
  fill: currentColor;
  d: path("M8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM4.053 5.54A2 2 0 0 1 5.54 4.052a.51.51 0 0 0 .462-.6a.51.51 0 0 0-.663-.38a3 3 0 0 0-2.265 2.265a.51.51 0 0 0 .38.663a.51.51 0 0 0 .6-.462m10.538-2.486l.07.02a3 3 0 0 1 2.266 2.264a.506.506 0 0 1-.38.664a.51.51 0 0 1-.6-.463a2 2 0 0 0-1.486-1.486a.51.51 0 0 1-.462-.6a.51.51 0 0 1 .592-.4M16.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5M3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0zm0 5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m.5-2.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z");
}
</style><path class="u7-mj1m6w"/>`,
		"fallback": "fluent:border-bottom-double-20-regular",
	});
}

export default Component;
