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
		"content": `<style>.koxapvtih {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zM8 16.5h5q.213 0 .356-.144t.144-.357t-.144-.356T13 15.5H8q-.213 0-.356.144t-.144.357t.144.356T8 16.5m0-4h8q.213 0 .356-.144t.144-.357t-.144-.356T16 11.5H8q-.213 0-.356.144t-.144.357t.144.356T8 12.5m0-4h8q.213 0 .356-.144t.144-.357t-.144-.356T16 7.5H8q-.213 0-.356.144t-.144.357t.144.356T8 8.5");
}
</style><path class="koxapvtih"/>`,
		"fallback": "material-symbols-light:article-rounded",
	});
}

export default Component;
