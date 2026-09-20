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
		"content": `<style>.afhptwb_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.48 5.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29.04a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z");
}

.dpssrfwfn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.248 28.461zc-1.788 0-3.251-1.515-3.251-3.367v-2.188c0-1.852 1.463-3.367 3.251-3.367c1.789 0 3.252 1.515 3.252 3.367v2.188c0 1.852-1.463 3.367-3.252 3.367m-7.834-5.555c0-1.852 1.463-3.367 3.252-3.367m-3.252 0v8.922m-11.898-1.683c-.488 1.01-1.626 1.683-2.764 1.683c-1.789 0-3.252-1.515-3.252-3.367v-2.188c0-1.852 1.463-3.367 3.252-3.367s3.251 1.515 3.251 3.367v1.178H9.5m15.012 2.694c-.488 1.01-1.626 1.683-2.764 1.683c-1.789 0-3.252-1.515-3.252-3.367v-2.188c0-1.852 1.463-3.367 3.252-3.367s3.251 1.515 3.251 3.367v1.178h-6.503");
}
</style><path class="dpssrfwfn"/><path class="afhptwb_j"/>`,
		"fallback": "arcticons:eero",
	});
}

export default Component;
