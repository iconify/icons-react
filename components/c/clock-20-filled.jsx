import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cijvclbnc {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16m-.5 3a.5.5 0 0 0-.5.5v5l.008.09A.5.5 0 0 0 9.5 11h3l.09-.008A.5.5 0 0 0 12.5 10H10V5.5l-.008-.09A.5.5 0 0 0 9.5 5");
}
</style><path class="cijvclbnc"/>`,
		"fallback": "fluent:clock-20-filled",
	});
}

export default Component;
