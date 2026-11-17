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
		"content": `<style>.gbtjxabax {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 13V12C7.5 9.515 9.515 7.5 12 7.5C14.485 7.5 16.5 9.515 16.5 12V13M1 12H4.5M19.5 12H23M4.636 4.636L6.282 6.282M19.364 4.636L17.718 6.282M12 4.5V1M3 17H21M4 22H11M13 22H20");
}
</style><path class="gbtjxabax"/>`,
		"fallback": "keyline-icons:haze-sharp-fill",
	});
}

export default Component;
