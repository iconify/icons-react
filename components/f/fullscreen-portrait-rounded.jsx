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
		"content": `<style>.u4pr_nbob {
  fill: currentColor;
  d: path("M9.192 17.616h5.616q.348 0 .578-.23t.23-.578V7.192q0-.348-.23-.577q-.23-.23-.578-.23H9.192q-.348 0-.578.23t-.23.577v9.616q0 .348.23.577q.23.23.578.23M19 19.386q0 .69-.462 1.153T17.384 21H6.616q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h10.769q.69 0 1.153.463T19 4.616z");
}
</style><path class="u4pr_nbob"/>`,
		"fallback": "material-symbols-light:fullscreen-portrait-rounded",
	});
}

export default Component;
