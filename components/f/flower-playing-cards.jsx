import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rsel93brt {
  fill: var(--svg-color--ee534e, #ee534e);
  d: path("M24.37 91.33s.11-75.25.2-77.84s1.9-4.49 4.4-4.57s68.02.08 70 .08s4.92.6 5.09 4.14s-.6 70.17-.6 70.17s-13.01-7.87-29.26-7.94c-25.03-.11-49.83 15.96-49.83 15.96");
}

.uw6zylb8z {
  fill: var(--svg-color--f5f5f5, #f5f5f5);
  d: path("M53.36 19.02c-13.83 0-22.42 9.43-22.2 23.04c.21 13.2 9.28 21.58 21.74 21.58c11.94 0 21.72-8.59 21.93-22.1s-9.42-22.52-21.47-22.52");
}

.y-cm1bcky {
  fill: var(--svg-color--5e6367, #5e6367);
  d: path("m102.29 125.43l-76.02-.37c-3.45 0-6.25-2.8-6.25-6.25l-.17-108.48c0-3.45 2.8-6.25 6.25-6.25l76.33.44c3.45 0 6.48 2.53 6.48 5.98l-.37 108.69c0 3.45-2.8 6.24-6.25 6.24");
}
</style><path class="y-cm1bcky"/><path class="rsel93brt"/><path class="uw6zylb8z"/>`,
		"fallback": "noto:flower-playing-cards",
	});
}

export default Component;
