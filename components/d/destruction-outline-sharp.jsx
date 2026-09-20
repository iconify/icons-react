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
		"content": `<style>.h9pxuy2fk {
  fill: currentColor;
  d: path("M3 22v-8h18v8zm2-2h14v-4H5zm1.525-7.5L1.5 9.65l6-1l-1.625-5.875L10.85 6.3l3-5.3l1 6l5.875-1.625L17.2 10.35L21 12.5h-4.05L14.3 11l1.55-2.2l-2.6.725l-.45-2.65L11.5 9.2L9.3 7.65l.725 2.6l-2.65.45l3 1.8zm5.65 0");
}
</style><path class="h9pxuy2fk"/>`,
		"fallback": "material-symbols:destruction-outline-sharp",
	});
}

export default Component;
