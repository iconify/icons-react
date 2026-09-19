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
		"content": `<style>.g2wj9jbhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4");
}

.k8uqfhibp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.287 31.335c1.25 1.1 2.292 1.54 5.001 1.54h.417c2.5 0 4.585-2.2 4.585-4.838h0c0-2.639-2.084-4.838-4.585-4.838H10.08v-7.696h10.21");
}

.mcehe6bjb {
  d: path("M29.05 23.86c-2.87 0-5.217 2.465-5.217 5.479h0c0 3.013 2.348 5.479 5.217 5.479h3.392c2.87 0 5.218-2.466 5.218-5.48h0c0-3.013-2.348-5.479-5.218-5.479");
}

.tkad5sour {
  d: path("M32.703 23.86c2.87 0 5.218-2.467 5.218-5.48h0c0-3.014-2.348-5.48-5.218-5.48H29.31c-2.87 0-5.218 2.466-5.218 5.48h0c0 3.013 2.348 5.48 5.218 5.48m-.26 0h3.653");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="mcehe6bjb"/><path class="tkad5sour"/></g><path class="k8uqfhibp"/><path class="g2wj9jbhp"/>`,
		"fallback": "arcticons:58wuba",
	});
}

export default Component;
