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
		"content": `<style>.ns34tgboy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 2V17.059M19 11.123L12.4125 17.826C12.1847 18.058 11.8153 18.058 11.5875 17.826L5 11.123M19 22H5");
}
</style><path class="ns34tgboy"/>`,
		"fallback": "keyline-icons:arrow-down-to-line",
	});
}

export default Component;
