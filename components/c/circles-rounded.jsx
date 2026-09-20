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
		"content": `<style>.ddj_exgdt {
  fill: currentColor;
  d: path("M17 2.154q2.02 0 3.433 1.413T21.846 7t-1.413 3.433T17 11.846t-3.433-1.413T12.154 7t1.413-3.433T17 2.154M4.07 15.873Q3.5 14.512 3.5 13q0-2.439 1.4-4.392t3.723-2.656q.552-.28 1.062.057q.51.339.48.962q-.007 1.383.512 2.643q.52 1.261 1.492 2.234q.968.967 2.216 1.484q1.248.516 2.625.508q.565.002.894.475t.175 1.071q-.754 2.31-2.704 3.712T11 20.5q-1.511 0-2.873-.57t-2.425-1.632t-1.633-2.425");
}
</style><path class="ddj_exgdt"/>`,
		"fallback": "material-symbols-light:circles-rounded",
	});
}

export default Component;
