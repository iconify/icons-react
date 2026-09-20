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
		"content": `<style>.zulkekpcy {
  fill: currentColor;
  d: path("M4.385 19v-8.577l5-5l5 5V19h-4.231v-3.308H8.615V19zm4.23-6.23h1.539v-1.54H8.615zM16 19.02V9.751l-4.329-4.329h1.421L17 9.331v9.688zm2.616 0V8.66l-3.237-3.237h1.44l2.797 2.816v10.78z");
}
</style><path class="zulkekpcy"/>`,
		"fallback": "material-symbols-light:holiday-village",
	});
}

export default Component;
