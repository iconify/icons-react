import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f2_3uxb7a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.26 9.52l-.43-4.08a.82.82 0 0 0-.9-.73l-3.27.34a.82.82 0 0 0-.73.9l.86 8.17a.82.82 0 0 0 .9.74l13.07-1.38a.83.83 0 0 0 .74-.91l-.35-3.26a.83.83 0 0 0-.9-.74Z");
}

.v8qeqlbxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.28 9.32c0-.36-1.81-1.19-2.16-1.31A18.08 18.08 0 0 0 5.85 34.14a.83.83 0 0 0 1.15.25a5.74 5.74 0 0 1 8.57 3a5.77 5.77 0 0 1-.1 3.94a.8.8 0 0 0 .53 1.07a18.08 18.08 0 0 0 21.25-26.2c-.19-.32-1.38-1.89-1.74-1.85M22.61 35a9.86 9.86 0 1 1 8.77-10.84A9.87 9.87 0 0 1 22.61 35");
}
</style><path class="v8qeqlbxb"/><path class="f2_3uxb7a"/>`,
		"fallback": "arcticons:fruux",
	});
}

export default Component;
