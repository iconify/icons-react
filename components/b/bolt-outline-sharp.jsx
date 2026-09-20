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
		"content": `<style>.dqgalib2h {
  fill: currentColor;
  d: path("m10.55 18.2l5.175-6.2h-4l.725-5.675L7.825 13H11.3zm-1.396 2.685l1-6.885h-4.25l7.48-10.788h.462L12.866 11h5l-8.25 9.885zm2.621-8.635");
}
</style><path class="dqgalib2h"/>`,
		"fallback": "material-symbols-light:bolt-outline-sharp",
	});
}

export default Component;
