import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g1p0b4a-l {
  fill: currentColor;
  d: path("M21.218 19.977C20.01 21.222 18.242 22 16 22H9a1 1 0 1 1 0-2h7c1.758 0 2.99-.597 3.782-1.415c.804-.83 1.218-1.948 1.218-3.085s-.414-2.256-1.218-3.085C18.99 11.597 17.758 11 16 11H8.414l3.293 3.293a1 1 0 1 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 1 1 1.414 1.414L8.414 9H16c2.242 0 4.01.778 5.218 2.023C22.414 12.256 23 13.887 23 15.5s-.586 3.244-1.782 4.477");
}
</style><path class="g1p0b4a-l"/>`,
		"fallback": "fluent:arrow-hook-up-left-28-filled",
	});
}

export default Component;
