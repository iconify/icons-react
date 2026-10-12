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
		"content": `<style>.l6ud41bhq {
  d: path("M12 2.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 1 0 0-14.5Z");
}

.sk8v-0b1q {
  d: path("m12.1 5.39l.86 3.16l.1.39l.39.1l3.16.86l.39.1l-.39.1l-3.16.86l-.39.1l-.1.39l-.86 3.16l-.1.39l-.1-.39l-.86-3.16l-.1-.39l-.39-.1l-3.16-.86L7 10l.39-.1l3.16-.86l.39-.1l.1-.39l.86-3.16L12 5zM9.35 17.25h5.9l.18.57l.89 2.86l.18.57h-9l.18-.57l.89-2.86l.18-.57z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="l6ud41bhq"/><path class="sk8v-0b1q"/></g>`,
		"fallback": "iconoven:compass-marine-sharp",
	});
}

export default Component;
