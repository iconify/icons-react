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
		"content": `<style>.d-xekr6au {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.277 18.805l-5.578-7.636a1.24 1.24 0 0 0-1.003-.51H7.944a.629.629 0 0 0-.508 1l8.343 11.47a1.48 1.48 0 0 1 0 1.741L7.436 36.342a.629.629 0 0 0 .508.998h9.752c.397 0 .77-.189 1.003-.509l5.578-7.636");
}

.iif-rnb8n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 14.447V9.175c0-1.213-.895-2.196-2-2.196h-5.606m0 34.042H41.5c1.105 0 2-.983 2-2.196v-5.272m-39 0v5.272c0 1.213.895 2.196 2 2.196h5.606m0-34.042H6.5c-1.105 0-2 .983-2 2.196v5.272");
}

.lymv5s1hy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.056 37.34h-9.198a1.24 1.24 0 0 1-1.003-.509l-7.996-10.946a3.2 3.2 0 0 1 0-3.77l7.996-10.946c.234-.32.606-.51 1.003-.51h9.198a.63.63 0 0 1 .508 1l-8.342 11.47a1.48 1.48 0 0 0 0 1.741l8.342 11.472a.629.629 0 0 1-.508.998");
}
</style><path class="iif-rnb8n"/><path class="lymv5s1hy"/><path class="d-xekr6au"/>`,
		"fallback": "arcticons:gauthmath",
	});
}

export default Component;
