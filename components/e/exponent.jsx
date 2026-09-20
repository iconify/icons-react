import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":240};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hyr9zlbtw {
  d: path("M94.104-.001L0 217.125l42.193 22.519L128 55.703l85.57 183.941L256 217.125L161.896-.001H94.104z");
  fill: var(--svg-color--023c69, #023C69);
}
</style><path class="hyr9zlbtw"/>`,
		"fallback": "logos:exponent",
	});
}

export default Component;
