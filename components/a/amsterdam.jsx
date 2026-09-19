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
		"content": `<style>.oq_jbbcmp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.277 3.5l9.446 9.445m-9.446 0L28.723 3.5m-9.446 15.777l9.446 9.446m-9.446 0l9.446-9.446m-9.446 15.778l9.446 9.445m-9.446 0l9.446-9.445");
}
</style><path class="oq_jbbcmp"/>`,
		"fallback": "arcticons:amsterdam",
	});
}

export default Component;
