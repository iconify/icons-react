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
		"content": `<style>.f3vg3ebpt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.668 22.702V8.487h7.369m0 30.097h-7.369v-3.806m22.021-6.707v10.513h-5.45M28.347 8.487h7.342v3.806M24.113 40.27l-4.239 2.23l-2.06-3.916m18.608-11.927l2.942 5.592l-3.675 1.933M24.113 6.264l1.241-.652l.957 1.819m-6.424 1.056l1.581-.832M11.58 26.73L5.864 15.863l7.804-4.105");
}

.jste9abvv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.585 5.5l19.55 10.135l-13.851 26.72L8.734 32.22zm9.416 29.685L12.451 25.05");
}
</style><path class="f3vg3ebpt"/><path class="jste9abvv"/>`,
		"fallback": "arcticons:color-snap",
	});
}

export default Component;
