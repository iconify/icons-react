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
		"content": `<style>.x0helgbaw {
  fill: currentColor;
  d: path("M7 16.5h5q.213 0 .356-.144t.144-.357t-.144-.356T12 15.5H7q-.213 0-.356.144t-.144.357t.144.356T7 16.5m9.643-8.856Q16.5 7.788 16.5 8v8q0 .213.144.356t.357.144t.356-.144T17.5 16V8q0-.213-.144-.356t-.357-.144t-.356.144M7 12.5h5q.213 0 .356-.144t.144-.357t-.144-.356T12 11.5H7q-.213 0-.356.144t-.144.357t.144.356T7 12.5m0-4h5q.213 0 .356-.144t.144-.357t-.144-.356T12 7.5H7q-.213 0-.356.144t-.144.357t.144.356T7 8.5M4.616 20q-.691 0-1.153-.462T3 18.384V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v12.769q0 .69-.463 1.153T19.385 20z");
}
</style><path class="x0helgbaw"/>`,
		"fallback": "material-symbols-light:clarify-rounded",
	});
}

export default Component;
