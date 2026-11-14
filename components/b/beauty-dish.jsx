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
		"content": `<style>.df_rt_5gp {
  d: path("M2.5 6.5a9.5 3 0 1 0 19 0a9.5 3 0 1 0-19 0Z");
}

.kgattoamf {
  d: path("M2.5 6.5c1 6 5 8.5 9.5 8.5s8.5-2.5 9.5-8.5M12 15v5.5m-2-14h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="df_rt_5gp"/><path class="kgattoamf"/></g>`,
		"fallback": "uix-sharp:beauty-dish",
	});
}

export default Component;
