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
		"content": `<style>.o02iqxbrk {
  fill: currentColor;
  d: path("M11.308 16.5h6.384q.349 0 .578-.23t.23-.578v-4.076q0-.349-.23-.578t-.578-.23h-6.384q-.348 0-.578.23t-.23.578v4.076q0 .349.23.578t.578.23M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19z");
}
</style><path class="o02iqxbrk"/>`,
		"fallback": "material-symbols-light:branding-watermark-rounded",
	});
}

export default Component;
