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
		"content": `<style>.oo_pd5smo {
  fill: currentColor;
  d: path("M15.725 19.275Q15 18.55 15 17.5t.725-1.775T17.5 15q.2 0 .45.038t.55.162V11q0-.425.288-.712T19.5 10H21q.425 0 .713.288T22 11t-.288.713T21 12h-1v5.5q0 1.05-.725 1.775T17.5 20t-1.775-.725m-7.55-8.45Q7 9.65 7 8t1.175-2.825T11 4t2.825 1.175T15 8t-1.175 2.825T11 12t-2.825-1.175M4 20q-.425 0-.712-.288T3 19v-1.8q0-.875.438-1.575T4.6 14.55q1.55-.775 3.15-1.162T11 13q.7 0 1.388.075t1.387.225q.425.1.537.525t-.237.775q-.525.625-.788 1.363t-.262 1.537q0 .325.038.638t.137.637q.125.45-.112.838t-.663.387z");
}
</style><path class="oo_pd5smo"/>`,
		"fallback": "material-symbols:artist-rounded",
	});
}

export default Component;
