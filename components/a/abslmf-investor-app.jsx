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
		"content": `<style>.d8ix8-bwr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 26.908V11.752h-4.875L24 36.247");
}

.hjf1yf79j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 11.752L4.5 36.247H24l19.5-9.339");
}

.m9lmmbcgq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 36.247H24L9.375 11.752M4.5 36.247v-9.339l19.5 9.34");
}

.xqdel98ht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.754 36.248q-.01-.231-.01-.462c0-1.542.317-3.068.931-4.482m0 0a11.26 11.26 0 0 1 4.354-5.06m0 0a11.26 11.26 0 0 1 11.943.001m0 0a11.26 11.26 0 0 1 4.353 5.058m0 0c.614 1.415.93 2.94.93 4.483h0q0 .231-.009.462M4.5 26.908V11.752h4.875m0 0H24m14.625 0H24l19.5 24.495m0 0v-9.339");
}
</style><path class="xqdel98ht"/><path class="d8ix8-bwr"/><path class="m9lmmbcgq"/><path class="hjf1yf79j"/>`,
		"fallback": "arcticons:abslmf-investor-app",
	});
}

export default Component;
