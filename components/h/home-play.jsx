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
		"content": `<style>.ymbg1h5wp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.2928 3.47L20.2928 9.4C20.7414 9.78 21 10.34 21 10.93V19C21 20.1 20.1046 21 19 21H5C3.8954 21 3 20.1 3 19V10.93C3 10.34 3.2586 9.78 3.7072 9.4L10.7072 3.47C11.4532 2.84 12.5468 2.84 13.2928 3.47Z");
}
</style><path class="ymbg1h5wp"/>`,
		"fallback": "keyline-icons:home-play",
	});
}

export default Component;
