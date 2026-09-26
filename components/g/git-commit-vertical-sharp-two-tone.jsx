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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uqnekzbnd {
  d: path("M12 9L12 2M12 22L12 15M12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9Z");
}

.wpgb0acmh {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 8C14.0711 8 16 9.9289 16 12C16 14.0711 14.0711 16 12 16C9.9289 16 8 14.0711 8 12C8 9.9289 9.9289 8 12 8Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="wpgb0acmh"/><path class="uqnekzbnd"/></g>`,
		"fallback": "keyline-icons:git-commit-vertical-sharp-two-tone",
	});
}

export default Component;
