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
		"content": `<style>.f1x3xac2u {
  fill: currentColor;
  d: path("M8.1 21.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788M9.5 16l1.4-1.4L9.3 13h5.4l-1.6 1.6l1.4 1.4l4-4l-4-4l-1.4 1.4l1.6 1.6H9.3l1.6-1.6L9.5 8l-4 4z");
}
</style><path class="f1x3xac2u"/>`,
		"fallback": "material-symbols:arrows-left-right-circle",
	});
}

export default Component;
