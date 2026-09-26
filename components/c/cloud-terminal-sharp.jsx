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
		"content": `<style>.yw0rmbfuh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 16L22 15C22 12.7909 20.2091 11 18 11C18 7.6863 15.3137 5 12 5C8.6863 5 6 7.6863 6 11C3.7909 11 2 12.7909 2 15C2 17.2091 3.7909 19 6 19L10 19M12.6508 11.7007L16.5 15L12.6508 18.2993M22 19L17 19");
}
</style><path class="yw0rmbfuh"/>`,
		"fallback": "keyline-icons:cloud-terminal-sharp",
	});
}

export default Component;
