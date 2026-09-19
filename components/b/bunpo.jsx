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
		"content": `<style>.sp_qrdb5n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.621 22.944c3.746 4.504 2.494 11.49-1.494 15.49c-7.492 6.986-14.984 4.745-13.49-4.999q2.252-16.477 14.984-26.97c4.493-2.987 7.492 1.506 3 5.999c-11.239 11.238-20.225 11.238-31.463 1.494");
}
</style><path class="sp_qrdb5n"/>`,
		"fallback": "arcticons:bunpo",
	});
}

export default Component;
