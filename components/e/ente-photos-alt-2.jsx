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
		"content": `<style>.t1kgqmbnu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.756 25.867c-.345.69-1.15 1.15-1.956 1.15a2.307 2.307 0 0 1-2.3-2.3V23.22c0-1.265 1.035-2.3 2.3-2.3c1.266 0 2.3 1.035 2.3 2.3v.805h-4.6m22.655 1.85c-.345.69-1.15 1.15-1.955 1.15a2.307 2.307 0 0 1-2.3-2.3V23.23c0-1.266 1.034-2.3 2.3-2.3s2.3 1.034 2.3 2.3v.805h-4.6M24 27.021v-3.795c0-1.266-1.035-2.3-2.3-2.3a2.307 2.307 0 0 0-2.3 2.3v3.795m-.001-3.795v-2.301");
}

.zeofbgz9r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.564 18.974v8.052m-1.265-6.096h2.415M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="t1kgqmbnu"/><path class="zeofbgz9r"/>`,
		"fallback": "arcticons:ente-photos-alt-2",
	});
}

export default Component;
