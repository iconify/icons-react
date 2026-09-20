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
		"content": `<style>.bcu-3voyp {
  fill: currentColor;
  d: path("M15 3a2 2 0 0 1 2 2v4.6a5.5 5.5 0 0 0-1-.393V5a1 1 0 1 0-2 0v4.022a5.5 5.5 0 0 0-1 .185V5a2 2 0 0 1 2-2M9.067 15.36c.089.565.263 1.101.51 1.595A2 2 0 0 1 8 15V8a2 2 0 1 1 4 0v1.6a5.5 5.5 0 0 0-1 .657V8a1 1 0 1 0-2 0v7q.001.192.067.36M5 9a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2m1 2a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm13 3.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z");
}
</style><path class="bcu-3voyp"/>`,
		"fallback": "fluent:data-bar-vertical-add-20-regular",
	});
}

export default Component;
