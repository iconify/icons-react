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
		"content": `<style>.eb4nkgcdn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2.264 11.323L8.4058 4.646C8.7845 4.2343 9.3183 4 9.8778 4L19 4C20.6569 4 22 5.3431 22 7L22 17C22 18.6569 20.6569 20 19 20L9.8778 20C9.3183 20 8.7845 19.7657 8.4058 19.354L2.264 12.677C1.912 12.2943 1.912 11.7057 2.264 11.323ZM11 9L17 15M17 9L11 15");
}
</style><path class="eb4nkgcdn"/>`,
		"fallback": "keyline-icons:delete",
	});
}

export default Component;
