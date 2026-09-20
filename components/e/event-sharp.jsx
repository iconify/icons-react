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
		"content": `<style>.jesshac-p {
  fill: currentColor;
  d: path("M13.389 17.38q-.62-.618-.62-1.495t.62-1.496t1.496-.62q.877 0 1.496.62T17 15.885t-.62 1.496t-1.495.619t-1.496-.62M4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v16zm1-1h14v-9.384H5z");
}
</style><path class="jesshac-p"/>`,
		"fallback": "material-symbols-light:event-sharp",
	});
}

export default Component;
