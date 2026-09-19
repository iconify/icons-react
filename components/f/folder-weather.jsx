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
		"content": `<style>.cwu77bbvh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.678 13.044H24.77c-1.963-.108-5.931-4.238-8.188-4.238H6.68v-.001a2.176 2.176 0 0 0-2.18 2.171v7.307h39v-3.418a1.822 1.822 0 0 0-1.822-1.821Zm1.822 5.239h-39v18.733a2.176 2.176 0 0 0 2.174 2.18h34.645a2.176 2.176 0 0 0 2.181-2.172V18.283Z");
}

.z9bs43baf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.693 25.52a3.22 3.22 0 1 1-3.22 3.22a3.22 3.22 0 0 1 3.22-3.22Zm0-2.781v.788m6 5.212h-.788m-5.212 6v-.788m-6-5.212h.788m9.455-4.243l-.557.557m.557 7.929l-.557-.557m-7.929.557l.557-.557m-.557-7.929l.557.557");
}
</style><path class="cwu77bbvh"/><path class="z9bs43baf"/>`,
		"fallback": "arcticons:folder-weather",
	});
}

export default Component;
