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
		"content": `<style>.ibakophuk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.21 29.133V41.83H9.78a1.974 1.974 0 0 1-1.978-1.978V5.875h8.43c1.096 0 1.978.882 1.978 1.978v8.333m11.58-.151V6.171h8.43c1.096 0 1.978.883 1.978 1.978v33.976h-8.43a1.974 1.974 0 0 1-1.978-1.978V29.245");
}

.ln4cyo6ry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.726 22.662a8.66 8.66 0 1 1-17.32 0a8.66 8.66 0 0 1 17.32 0");
}

.lt-vlpbes {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.325 25.295c0 .69.795 1.273 1.587.805l4.553-2.691c.714-.423.712-1.237 0-1.658l-4.553-2.691c-.792-.468-1.587.115-1.587.805z");
}
</style><path class="ibakophuk"/><path class="ln4cyo6ry"/><path class="lt-vlpbes"/>`,
		"fallback": "arcticons:happyshort",
	});
}

export default Component;
