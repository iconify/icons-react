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
		"content": `<style>.bue_65boa {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.3859 5.0748L12 3.9963L3 11L3 22L21 22L21 11M9 22L9 15L15 15L15 22M20.2929 1.7071L17 5L21 5L17.7071 8.2929");
}
</style><path class="bue_65boa"/>`,
		"fallback": "keyline-icons:home-zap-sharp",
	});
}

export default Component;
