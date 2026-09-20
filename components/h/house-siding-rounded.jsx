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
		"content": `<style>.cr9w8zc8y {
  fill: currentColor;
  d: path("M6.692 17v2.5q0 .214-.143.357T6.192 20t-.356-.143t-.144-.357V9.946L3 11.952q-.177.115-.365.097q-.189-.018-.323-.195q-.135-.177-.114-.365q.021-.189.198-.324l8.629-6.451q.217-.162.463-.233T12 4.409t.513.072t.462.232l8.648 6.453q.171.134.195.322t-.11.366t-.323.195t-.366-.097l-2.692-2.006V19.5q0 .214-.143.357t-.357.143t-.357-.143t-.143-.357V17zm0-4.77h10.635V9.462H6.692zm0 3.77h10.635v-2.77H6.692zm.981-7.539h8.654L12 5.256z");
}
</style><path class="cr9w8zc8y"/>`,
		"fallback": "material-symbols-light:house-siding-rounded",
	});
}

export default Component;
