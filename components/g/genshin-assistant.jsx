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
		"content": `<style>.mei_uh1ba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 3.5l6.634 13.252L44.5 24l-13.866 7.248L24 44.5l-6.634-13.252L3.5 24l13.866-7.248zM3.5 24h41M24 3.5v41m-6.634-13.252l13.268-14.496m0 14.496L17.366 16.752");
}
</style><path class="mei_uh1ba"/>`,
		"fallback": "arcticons:genshin-assistant",
	});
}

export default Component;
