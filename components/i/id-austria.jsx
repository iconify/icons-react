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
		"content": `<style>.gw2qj2bup {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 18.957h12.686v2.536H5.77zm2.538 5.075h10.148v2.537h-8.88z");
}

.p5w8c_7_a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.74 19.825l5.904.026l2.712-3.744l11.106.033c2.047-.043 3.033.855 3.038 2.565l-.021 10.59c-.005 1.71-.99 2.609-3.038 2.564l-3.472.01l-7.635.024l-3.682-6.012l-4.99-.025");
}

.zn8lmvbgd {
  cx: 37.081px;
  cy: 22.239px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.168px;
  ry: 2.085px;
}
</style><path class="p5w8c_7_a"/><ellipse class="zn8lmvbgd"/><path class="gw2qj2bup"/>`,
		"fallback": "arcticons:id-austria",
	});
}

export default Component;
