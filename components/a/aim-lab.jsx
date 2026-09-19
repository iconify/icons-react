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
		"content": `<style>.a43yy2bul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5C12.126 2.5 2.5 12.126 2.5 24a21.5 21.5 0 0 0 5.805 14.633L24 8.223l15.695 30.41A21.5 21.5 0 0 0 45.5 24c0-11.874-9.626-21.5-21.5-21.5");
}

.wfjqbub1a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 25.666l-9.17 17.762A21.5 21.5 0 0 0 24 45.5a21.5 21.5 0 0 0 9.17-2.072z");
}
</style><path class="wfjqbub1a"/><path class="a43yy2bul"/>`,
		"fallback": "arcticons:aim-lab",
	});
}

export default Component;
