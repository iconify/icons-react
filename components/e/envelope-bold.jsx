import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b0lh0eblf {
  fill: currentColor;
  d: path("M224 44H32a12 12 0 0 0-12 12v136a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a12 12 0 0 0-12-12m-96 83.72L62.85 68h130.3Zm-35.21.28L44 172.72V83.28Zm17.76 16.28l9.34 8.57a12 12 0 0 0 16.22 0l9.34-8.57l47.7 43.72H62.85ZM163.21 128L212 83.28v89.44Z");
}
</style><path class="b0lh0eblf"/>`,
		"fallback": "ph:envelope-bold",
	});
}

export default Component;
