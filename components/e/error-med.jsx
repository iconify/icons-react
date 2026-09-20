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
		"content": `<style>.k_20y-b0a {
  fill: currentColor;
  d: path("m11.075 14.95l1.85-2.525l1.825 2.525L18 10.525L16.4 9.35l-1.65 2.225L12.9 9.05l-1.825 2.525l-1.85-2.525L6 13.475l1.6 1.175l1.625-2.225zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22");
}
</style><path class="k_20y-b0a"/>`,
		"fallback": "material-symbols:error-med",
	});
}

export default Component;
