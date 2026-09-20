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
		"content": `<style>.mnukes0el {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.317 17.266a10.71 10.71 0 0 0-6.976 10.077C13.341 33.253 18.09 38 24 38s10.657-4.747 10.657-10.657c.097-4.651-2.81-8.72-7.072-10.173");
}

.pp47lfbpe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4m-18.182 8.666h7.267");
}

.tzzae821f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.317 10h7.266v21.702h-7.266z");
}
</style><path class="pp47lfbpe"/><path class="mnukes0el"/><path class="tzzae821f"/>`,
		"fallback": "arcticons:anutotd",
	});
}

export default Component;
