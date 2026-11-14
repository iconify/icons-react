import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rl_0q4bzo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.375 1.75H5.625q-1.398 0-2.386.989q-.989.988-.989 2.386v2.75q0 1.398.989 2.386q.988.989 2.386.989h12.75q3.375 0 3.375-3.375v-2.75q0-3.375-3.375-3.375M7.25 4.25q2.25 0 2.25 2.25T7.25 8.75T5 6.5t2.25-2.25M5.625 12.5h12.75q3.375 0 3.375 3.375v2.75q0 1.398-.989 2.386q-.988.989-2.386.989H5.625q-1.398 0-2.386-.989q-.989-.988-.989-2.386v-2.75q0-3.375 3.375-3.375M5 17.25q0 2.25 2.25 2.25t2.25-2.25T7.25 15T5 17.25");
}
</style><path class="rl_0q4bzo"/>`,
		"fallback": "uix-solid:active-passive",
	});
}

export default Component;
