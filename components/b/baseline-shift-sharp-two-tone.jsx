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
		"content": `<style>.ofszgpbxc {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1.928 14.6273L7 2L12.072 14.6273M4.188 9L9.812 9M22 1L22 10M22 6C22 7.657 20.657 9 19 9C17.343 9 16 7.657 16 6C16 4.343 17.343 3 19 3C20.657 3 22 4.343 22 6ZM19 23L19 13M22.2929 16.2929L19 13L15.7071 16.2929");
}
</style><path class="ofszgpbxc"/>`,
		"fallback": "keyline-icons:baseline-shift-sharp-two-tone",
	});
}

export default Component;
