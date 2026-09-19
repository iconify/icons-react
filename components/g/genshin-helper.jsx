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
		"content": `<style>.fid0o1lom {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.475 18.545c.374-.994 1.517-1.109 2.554-.256s1.573 2.35 1.199 3.344s-1.518 1.109-2.554.256s-1.573-2.35-1.199-3.344M4.5 14.156l16.056 6.141m-6.579 13.258l5.569-.593m1.685-1.016c.15-.774.773-1.16 1.392-.865s.999 1.163.849 1.937s-.773 1.16-1.392.864s-.999-1.163-.849-1.936");
}

.jj4lqfb_e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.656 36.618L43.5 33.846l-8.22-22.464L4.5 14.156zM35.28 11.382l-11.162 8.426");
}
</style><path class="jj4lqfb_e"/><path class="fid0o1lom"/>`,
		"fallback": "arcticons:genshin-helper",
	});
}

export default Component;
