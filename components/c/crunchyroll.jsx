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
		"content": `<style>.glzwt4bfo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.876 45.094a20.286 20.286 0 1 1 26.818-28.409");
}

.ppoabqn_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.117 25.912a7.571 7.571 0 1 1-8.713-12.148");
}

.sj2tw1byk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 46a22 22 0 1 1 22-22");
}

.wjq13bc9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.219 26.001a15.714 15.714 0 1 1-8.874-12.288");
}
</style><path class="sj2tw1byk"/><path class="wjq13bc9d"/><path class="ppoabqn_z"/><path class="glzwt4bfo"/>`,
		"fallback": "arcticons:crunchyroll",
	});
}

export default Component;
