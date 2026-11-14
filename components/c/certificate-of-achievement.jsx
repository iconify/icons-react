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
		"content": `<style>.nm4mpxyon {
  d: path("M13.75 15a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm1.75 3l-.75 3.5M18.5 18l.75 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uw3r80b7c {
  d: path("M12 21.5H6.5a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2V9M8 7h8m-8 3.5h4.5M8 14h2.5");
}
</style><g class="ulnmmdpxh"><path class="uw3r80b7c"/><path class="nm4mpxyon"/></g>`,
		"fallback": "uix-sharp:certificate-of-achievement",
	});
}

export default Component;
