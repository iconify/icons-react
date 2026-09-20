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
		"content": `<style>.h2h2hmbfm {
  fill: currentColor;
  d: path("M3 18.077V9.635q0-.385.27-.654t.653-.27h1.904V5.924q0-.385.27-.654T6.75 5h2.942q.385 0 .654.27t.27.653v2.789h2.768V5.923q0-.385.27-.654T14.308 5h2.942q.385 0 .654.27t.269.653v2.789h1.904q.384 0 .654.269t.269.654v8.442q0 .385-.27.654t-.653.269H3.923q-.385 0-.654-.27T3 18.078M4 18h16V9.712H4zm2.827-9.288h2.789V6H6.827zm7.558 0h2.788V6h-2.788zM4 18h16zm2.827-9.288h2.789zm7.558 0h2.788z");
}
</style><path class="h2h2hmbfm"/>`,
		"fallback": "material-symbols-light:brick-outline-rounded",
	});
}

export default Component;
