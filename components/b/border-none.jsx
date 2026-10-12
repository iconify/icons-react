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
		"content": `<style>.afpchdbmo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h.01M3 7.5h.01M3 12h.01M3 16.5h.01M3 21h.01M7.5 3h.01M7.5 21h.01M12 3h.01M12 21h.01M16.5 3h.01m-.01 18h.01M21 3h.01M21 7.5h.01M21 12h.01M21 16.5h.01M21 21h.01M7.5 12h.01M12 7.5h.01M12 12h.01M12 16.5h.01M16.5 12h.01");
}
</style><path class="afpchdbmo"/>`,
		"fallback": "iconoven:border-none",
	});
}

export default Component;
