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
		"content": `<style>.ug0ywvf7w {
  fill: currentColor;
  d: path("M7 17.116h2.839l5-9H17q.26 0 .438-.178t.178-.438t-.178-.437T17 6.885h-2.838l-5 9H7q-.26 0-.437.178t-.178.437t.178.438t.437.178M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="ug0ywvf7w"/>`,
		"fallback": "material-symbols-light:escalator",
	});
}

export default Component;
