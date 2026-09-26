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
		"content": `<style>.doch_vycb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.25868 12.456L17.2159 18.9273C17.5635 19.1326 18 18.8787 18 18.4713V5.52868C18 5.12126 17.5635 4.86742 17.2159 5.0727L6.25868 11.544C5.91377 11.7477 5.91377 12.2523 6.25868 12.456Z");
}
</style><path class="doch_vycb"/>`,
		"fallback": "keyline-icons:caret-left-duotone",
	});
}

export default Component;
