import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x9wnfzbxl {
  fill: currentColor;
  d: path("M12.146 10.854a.5.5 0 0 0 .708-.708L10.707 8H15.5A2.5 2.5 0 0 0 18 5.5v-3s0-.5-.5-.5s-.5.5-.5.5v3A1.5 1.5 0 0 1 15.5 7h-4.793l2.147-2.146a.5.5 0 0 0-.708-.708l-3 3a.5.5 0 0 0 0 .708zM7.854 9.146a.5.5 0 1 0-.708.708L9.293 12H2.5s-.5 0-.5.5s.5.5.5.5h6.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708z");
}
</style><path class="x9wnfzbxl"/>`,
		"fallback": "fluent:arrow-paragraph-20-regular",
	});
}

export default Component;
