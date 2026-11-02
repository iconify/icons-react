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
		"content": `<style>.kc75hcczw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 21v-9c0-.64.36-1.36 1-2l3-3l3 3c.64.64 1 1.36 1 2v9m-8-8l-2 1c-1.226.613-2 1.387-2 2v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2c0-.613-.774-1.387-2-2l-2-1M12 3v4m-2-2h4");
}
</style><path class="kc75hcczw"/>`,
		"fallback": "coolicons:church-round",
	});
}

export default Component;
