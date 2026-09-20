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
		"content": `<style>.ft_m69bqd {
  fill: currentColor;
  d: path("M12 19v-9H3V8h11v11zm5-5V5H8V3h11v11z");
}
</style><path class="ft_m69bqd"/>`,
		"fallback": "material-symbols:arrows-more-up-outline",
	});
}

export default Component;
