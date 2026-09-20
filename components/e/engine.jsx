import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wzq89kc3o {
  fill: currentColor;
  d: path("M240 104h-12.69L192 68.69A15.86 15.86 0 0 0 180.69 64H140V40h24a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16h24v24H64a16 16 0 0 0-16 16v52H24v-24a8 8 0 0 0-16 0v64a8 8 0 0 0 16 0v-24h24v20.69A15.86 15.86 0 0 0 52.69 180L92 219.31a15.86 15.86 0 0 0 11.31 4.69h77.38a15.86 15.86 0 0 0 11.31-4.69L227.31 184H240a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64h-16a8 8 0 0 0-5.66 2.34L180.69 208h-77.38L64 168.69V80h116.69l37.65 37.66A8 8 0 0 0 224 120h16Z");
}
</style><path class="wzq89kc3o"/>`,
		"fallback": "ph:engine",
	});
}

export default Component;
