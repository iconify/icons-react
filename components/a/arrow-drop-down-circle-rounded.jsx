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
		"content": `<style>.khpq9gl_w {
  fill: currentColor;
  d: path("M11.65 14.65q.15.15.35.15t.35-.15l2.8-2.8q.25-.25.125-.55T14.8 11H9.2q-.35 0-.475.3t.125.55zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22");
}
</style><path class="khpq9gl_w"/>`,
		"fallback": "material-symbols:arrow-drop-down-circle-rounded",
	});
}

export default Component;
