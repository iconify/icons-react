import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fa2n_sm6b {
  fill: currentColor;
  d: path("M8.944 9.894a1.5 1.5 0 0 1 1.112-2.787L41.61 19.702c2.078.83 2.104 3.76.042 4.627L12.393 36.622l7.728 3.513a1.5 1.5 0 0 1-1.241 2.73l-11-5a1.5 1.5 0 0 1-.764-1.942l5-12a1.5 1.5 0 0 1 2.769 1.154l-3.659 8.781l28.137-11.822z");
}
</style><path class="fa2n_sm6b"/>`,
		"fallback": "fluent:arrow-turn-right-left-48-filled",
	});
}

export default Component;
