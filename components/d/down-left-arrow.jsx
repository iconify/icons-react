import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ype8rpb3p {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("m29.82 98.25l8.28-53.74l14.18 14.18l28.94-28.94l16.96 16.97l-28.94 28.93l14.32 14.33z");
}
</style><path class="ype8rpb3p"/>`,
		"fallback": "noto-v1:down-left-arrow",
	});
}

export default Component;
