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
		"content": `<style>.mgns90b-d {
  fill: currentColor;
  d: path("M12 21.25C12.4142 21.25 12.75 21.5858 12.75 22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22C11.25 21.5858 11.5858 21.25 12 21.25Z");
}

.waxeanb4e {
  fill: currentColor;
  d: path("M11.25 15.333V2C11.25 1.58579 11.5858 1.25 12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V15.333C12.75 15.7472 12.4142 16.083 12 16.083C11.5858 16.083 11.25 15.7472 11.25 15.333Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><path class="waxeanb4e"/><path class="mgns90b-d"/>`,
		"fallback": "solar:exclamation-mark-bold-duotone",
	});
}

export default Component;
