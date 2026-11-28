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
		"content": `<style>.djtk-pl-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 21.1652C4.3557 19.5747 2 15.9762 2 12C2 6.4772 6.4772 2 12 2C15.9762 2 19.5747 4.3557 21.1652 8M2 12L8 12M12 2C9.3333 5 8 8.5 8 12M12 2C13.3827 3.5555 14.4069 5.2454 15.0726 7M22 16.5C22 19.5376 19.5376 22 16.5 22C13.4624 22 11 19.5376 11 16.5C11 13.4624 13.4624 11 16.5 11C19.5376 11 22 13.4624 22 16.5ZM16 15.1L16 17L17.9 17");
}
</style><path class="djtk-pl-r"/>`,
		"fallback": "keyline-icons:globe-clock",
	});
}

export default Component;
