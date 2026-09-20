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
		"content": `<style>.bz51149cc {
  fill: currentColor;
  d: path("M15.383 11c.402 0 .789.16 1.072.447l3.108 3.14c.593.6.581 1.568-.026 2.153l-2.947 2.838a1.51 1.51 0 0 1-2.124-.031l-3.034-3.098A1.5 1.5 0 0 1 11 15.391v-2.88A1.51 1.51 0 0 1 12.51 11zM16 2a2 2 0 0 1 2 2v7.586l-.834-.842A2.5 2.5 0 0 0 15.383 10H12.51A2.51 2.51 0 0 0 10 12.512V15H8v2h2.585q.063.077.133.15l.833.85H5.5a.5.5 0 0 1 0-1H7v-2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm-2.25 11a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5");
}
</style><path class="bz51149cc"/>`,
		"fallback": "fluent:desktop-tag-20-filled",
	});
}

export default Component;
