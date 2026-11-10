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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.g51j9bcto {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16.53 9.15C16.823 9.33 17 9.66 17 10C17 10.34 16.822 10.66 16.53 10.85L8.06 16.14L7.53 15.29L7 14.45L14.112 10L7.227 5.7L8.287 4L16.53 9.15Z");
}

.kl4zvkbzg {
  fill-rule: evenodd;
  d: path("M17 18V20H7V18H17Z");
}
</style><g class="cuyn6tgcc"><path class="g51j9bcto"/><path clip-rule="evenodd" class="kl4zvkbzg"/></g>`,
		"fallback": "keyline-icons:greater-than-equal-sharp-two-tone",
	});
}

export default Component;
