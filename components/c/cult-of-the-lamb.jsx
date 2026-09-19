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
		"content": `<style>.e1digtb5t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.08 24a11.6 11.6 0 0 0-8.974 4.233a.684.684 0 0 0 0 .871c2.133 2.585 5.361 4.233 8.975 4.233s6.842-1.648 8.975-4.233a.684.684 0 0 0 0-.871A11.6 11.6 0 0 0 24.08 24");
}

.e2fvjtbsl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.746 28.597c0 1.15.349 2.217.945 3.104c.182.27.577.27.758 0c.597-.887.946-1.955.946-3.104s-.349-2.218-.945-3.105a.456.456 0 0 0-.759 0a5.55 5.55 0 0 0-.945 3.105");
}

.ihav0cb4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.08 15.848C18.38 4.105 11.414 4.68 11.414 4.68L9.366 42.279S14.34 43.5 24.081 43.5s14.553-.934 14.553-.934L36.982 4.5s-8.673.97-12.901 11.348Z");
}
</style><path class="ihav0cb4f"/><path class="e2fvjtbsl"/><path class="e1digtb5t"/>`,
		"fallback": "arcticons:cult-of-the-lamb",
	});
}

export default Component;
