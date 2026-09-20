import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tc1v4wblp {
  fill: currentColor;
  d: path("M6 1a.5.5 0 0 1 .354.146v.002A15 15 0 0 1 8.1 3.217C8.806 4.244 9.5 5.597 9.5 7c0 1.337-.36 2.352-1.019 3.035C7.821 10.718 6.928 11 6 11s-1.822-.282-2.481-.965S2.5 8.337 2.5 7c0-1.403.694-2.756 1.4-3.783a15 15 0 0 1 1.745-2.07h.001A.5.5 0 0 1 6 1");
}
</style><path class="tc1v4wblp"/>`,
		"fallback": "fluent:drop-12-filled",
	});
}

export default Component;
