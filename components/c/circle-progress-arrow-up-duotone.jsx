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
		"content": `<style>.hbfp65b1a {
  d: path("M12 22C6.4772 22 2 17.5229 2 12C2 6.4772 6.4772 2 12 2M8 11.8937L11.6464 8.1503C11.8417 7.9499 12.1583 7.9499 12.3536 8.1503L16 11.8937M12 16L12 8.3007");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wjk7vbbyo {
  stroke-opacity: 0.4;
  d: path("M17.8778 3.9098C18.7268 4.5266 19.4734 5.2732 20.0902 6.1222M21.8769 10.4357C22.041 11.4721 22.041 12.5279 21.8769 13.5643M20.0902 17.8778C19.4734 18.7268 18.7268 19.4734 17.8778 20.0902");
}
</style><g class="nrj6p8qat"><path class="wjk7vbbyo"/><path class="hbfp65b1a"/></g>`,
		"fallback": "keyline-icons:circle-progress-arrow-up-duotone",
	});
}

export default Component;
