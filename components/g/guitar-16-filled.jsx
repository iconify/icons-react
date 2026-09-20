import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dzd58bbkl {
  fill: currentColor;
  d: path("m8.912 5.844l1.612-1.612l1.245 1.244l-1.612 1.612l.093.093a1.673 1.673 0 0 1-.435 2.68l-.488.244a.3.3 0 0 0-.159.324l.009.042a2.82 2.82 0 0 1-1.074 2.81a3.595 3.595 0 0 1-4.699-.334l-.351-.35a3.595 3.595 0 0 1-.334-4.7a2.82 2.82 0 0 1 2.81-1.074l.043.009a.3.3 0 0 0 .323-.158l.245-.489a1.673 1.673 0 0 1 2.679-.435zm-2.62 3.864a1 1 0 1 0 1.415-1.415a1 1 0 0 0-1.414 1.415m6.184-4.939L11.23 3.525l.685-.685a.48.48 0 0 1 .68 0l.565.565a.48.48 0 0 1 0 .679z");
}
</style><path class="dzd58bbkl"/>`,
		"fallback": "fluent:guitar-16-filled",
	});
}

export default Component;
