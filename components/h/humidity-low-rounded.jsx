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
		"content": `<style>.ozpb9-r_s {
  fill: currentColor;
  d: path("M12 20.5q-2.91 0-4.955-2.006T5 13.61q0-1.373.555-2.628t1.487-2.24L10.87 4.99q.242-.22.534-.34q.291-.12.593-.12t.597.12t.538.34l3.827 3.752q.933.985 1.487 2.24T19 13.615q0 2.882-2.045 4.884T12 20.5m4.25-2.707Q18 16.086 18 13.619q0-1.18-.45-2.248T16.25 9.5l-3.827-3.777Q12.25 5.55 12 5.55t-.423.173L7.75 9.5q-.85.804-1.3 1.871T6 13.62q0 2.467 1.75 4.174T12 19.5t4.25-1.707");
}
</style><path class="ozpb9-r_s"/>`,
		"fallback": "material-symbols-light:humidity-low-rounded",
	});
}

export default Component;
