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
		"content": `<style>.fakyndbez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.53 33.668c-.904 1.02-2.454 1.672-4.651 1.672c-2.181 0-3.732-.645-4.645-1.653m-7.212-16.764a5.07 5.07 0 0 1 2.727-2.413a5.07 5.07 0 0 1 3.644-.339m17.447 2.752a5.78 5.78 0 0 0-6.363-2.76m-15.544 8.426s3.163-1.745 6.435 0m7.44 0s3.163-1.745 6.435 0");
}

.l6cd208_p {
  cx: 24px;
  cy: 24px;
  r: 18.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="fakyndbez"/><circle class="l6cd208_p"/>`,
		"fallback": "arcticons:emoji-face-smiling",
	});
}

export default Component;
