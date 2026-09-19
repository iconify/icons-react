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
		"content": `<style>.f4j6f0bid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.79 28.942l3.539-.07s.624-2.603 1.873-5.045l-5.409-.05v-3.711l7.386.004c.853-1.595 1.47-2.52 3.699-5.131l-16.305-.03L4.5 33.096h5.222zm14.902-7.367l4.316 11.523h5.096l4.174-11.523v11.523H43.5l-.065-18.19h-8.588l-3.213 9.372l-3.325-9.372l-5.14-.006c-.462.113-1.695 2.933-2.313 5.29c-.382 1.455-.899 4.502-1.142 6.73c-.152 1.397-.383 6.176-.251 6.176h5.228z");
}
</style><path class="f4j6f0bid"/>`,
		"fallback": "arcticons:flitsmeister",
	});
}

export default Component;
