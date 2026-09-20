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
		"content": `<style>.ed_hxwxdi {
  fill: currentColor;
  d: path("M8 21q-1.237 0-2.119-.881T5 18V8q0-1.237.881-2.119T8 5h1.5V3.5q0-.213.144-.356T10.001 3t.356.144t.143.356V5h3V3.5q0-.213.144-.356T14.001 3t.356.144t.143.356V5H16q1.238 0 2.119.881T19 8v10q0 1.238-.881 2.119T16 21zM9 9.5h6q.213 0 .356-.144t.144-.357t-.144-.356T15 8.5H9q-.213 0-.356.144t-.144.357t.144.356T9 9.5m2.997 7.827q.822 0 1.394-.568q.57-.569.57-1.36q0-.328-.08-.56t-.298-.541l-1.123-1.335q-.187-.217-.461-.217q-.275 0-.451.214l-1.137 1.343q-.216.311-.294.535t-.078.555q0 .797.567 1.366q.568.568 1.39.568");
}
</style><path class="ed_hxwxdi"/>`,
		"fallback": "material-symbols-light:gas-meter-rounded",
	});
}

export default Component;
