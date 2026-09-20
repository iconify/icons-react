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
		"content": `<style>.f2h22kbsz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.099 36.501v-25l-13.29 16.666h16.382");
}

.reyv5f5os {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.857 40.438A21.5 21.5 0 0 1 24 45.5C12.126 45.5 2.5 35.874 2.5 24a21.5 21.5 0 0 1 4.664-13.37m2.572-2.717A21.5 21.5 0 0 1 24 2.5c11.874 0 21.5 9.626 21.5 21.5a21.5 21.5 0 0 1-5.002 13.786");
}
</style><path class="f2h22kbsz"/><path class="reyv5f5os"/>`,
		"fallback": "arcticons:app-and-game-4pda",
	});
}

export default Component;
