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
		"content": `<style>.vf_08cb1k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.794 41.128V6.863h7.712c8.281 0 14.994 6.713 14.994 14.994v4.286c0 8.281-6.713 14.994-14.994 14.994zM5.621 11.4h5.322v6.647H5.621zM5.5 30.53h5.322v6.647H5.5z");
}
</style><path class="vf_08cb1k"/>`,
		"fallback": "arcticons:farhan",
	});
}

export default Component;
