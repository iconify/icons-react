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
		"content": `<style>.gpquxpb5t {
  fill: currentColor;
  d: path("M5.1 10q.312-2.152 2.018-3.576T11 5q2.052 0 3.243.957T16 7.754V5h1v5h-5V9h3.539q-.495-1.073-1.623-2.036Q12.79 6 11 6Q9.2 6 7.825 7.138T6.1 10zm14.5 10.346L14.854 15.6q-.842.714-1.809 1.057Q12.08 17 11 17q-1.475 0-2.849-.726T6 14.246V17H5v-5h5v1H6.462q.552 1.304 1.776 2.152T11 16q1.8 0 3.175-1.137T15.9 12h1q-.125.9-.45 1.553t-.889 1.34l4.747 4.746z");
}
</style><path class="gpquxpb5t"/>`,
		"fallback": "material-symbols-light:find-replace-outline-sharp",
	});
}

export default Component;
