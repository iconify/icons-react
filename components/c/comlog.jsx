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
		"content": `<style>.loykr6zxy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.446 33.733c.143-.082-1.965-1.18-6.447-3.703l-9.851 5.657l-9.784-5.462l-.003-11.782l9.787-5.456l9.85 5.44l6.448-3.848L24.148 5l-16.6 9.58v19.153L24.148 43z");
}
</style><path class="loykr6zxy"/>`,
		"fallback": "arcticons:comlog",
	});
}

export default Component;
