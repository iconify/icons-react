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
		"content": `<style>.l_i2tgbwf {
  fill: currentColor;
  d: path("M3 17v-2c0-.39.098-.773.299-1.108c.133-.222.312-.417.494-.599c.065-.066.145-.133.193-.214C4 13.057 4 13.026 4 13v-3a8 8 0 0 1 16 0v3c0 .026 0 .057.014.079c.048.081.128.148.193.214c.182.182.361.377.494.599c.201.335.299.718.299 1.108v2a1 1 0 0 1-1 1h-4a4 4 0 0 1-8 0H4a1 1 0 0 1-1-1");
}
</style><path class="l_i2tgbwf"/>`,
		"fallback": "coolicons:bell-fill-sharp",
	});
}

export default Component;
