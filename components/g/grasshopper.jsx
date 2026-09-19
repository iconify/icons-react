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
		"content": `<style>.kttw9obaq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 19.159c0 7.002 8.458 11.854 17.47 11.854h13.206c0-15.286-16.326-14.974-21.005-19.653c0 0-.52 4.783 2.287 7.799Zm30.676 11.854v5.962m-5.858-5.962v5.962m-4.675-5.962l-5.877 5.878");
}

.l1ji318fm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.488 18.188h5.798a3.214 3.214 0 0 1 3.214 3.215v8.501s-9.012-2.704-9.012-11.716");
}

.zrhbfua-u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.063 11.025c-2.08 2.184-2.575 4.044-2.575 7.163");
}
</style><path class="kttw9obaq"/><path class="l1ji318fm"/><path class="zrhbfua-u"/>`,
		"fallback": "arcticons:grasshopper",
	});
}

export default Component;
