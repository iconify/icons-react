import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v2cog3b-n {
  fill: currentColor;
  d: path("M29.726 5.312a1 1 0 0 1-.038 1.414l-19 18a1 1 0 0 1-1.42-.044l-7-7.5a1 1 0 1 1 1.463-1.364l6.313 6.763L28.312 5.274a1 1 0 0 1 1.414.038");
}
</style><path class="v2cog3b-n"/>`,
		"fallback": "fluent:checkmark-32-regular",
	});
}

export default Component;
