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
		"content": `<style>.jj-a0qoel {
  fill: currentColor;
  d: path("M7.136 2.225a1.75 1.75 0 0 1 1.728 0l5.403 3.067c.407.232.673.645.722 1.105q.01.05.011.103v5.75A1.75 1.75 0 0 1 13.25 14H10.5A1.5 1.5 0 0 1 9 12.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2A1.5 1.5 0 0 1 5.5 14H2.75a1.75 1.75 0 0 1-1.741-1.57L1 12.25V6.5q0-.053.01-.103c.05-.46.316-.873.723-1.105zM14 7.928a1.5 1.5 0 0 1-.448.072H2.448Q2.213 8 2 7.928v4.322l.004.078A.75.75 0 0 0 2.75 13H5.5a.5.5 0 0 0 .5-.5v-2A1.5 1.5 0 0 1 7.5 9h1a1.5 1.5 0 0 1 1.5 1.5v2a.5.5 0 0 0 .5.5h2.75a.75.75 0 0 0 .75-.75zM8.37 3.095a.75.75 0 0 0-.74 0L2.227 6.162A.449.449 0 0 0 2.448 7h11.104a.449.449 0 0 0 .221-.838z");
}
</style><path class="jj-a0qoel"/>`,
		"fallback": "fluent:building-yurt-16-regular",
	});
}

export default Component;
