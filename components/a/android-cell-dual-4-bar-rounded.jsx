import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rpujjzayk {
  fill: currentColor;
  d: path("M2.866 14.115V10.77q0-.352.247-.6q.247-.246.6-.246t.6.247t.245.6v3.345q0 .353-.248.6t-.6.247t-.6-.247q-.244-.247-.244-.6m5.519 0V9.461q0-.352.247-.599t.601-.247t.599.247t.245.6v4.653q0 .353-.247.6t-.601.247t-.6-.247t-.244-.6m5.519 0v-6.48q0-.353.247-.6t.601-.246t.599.246t.245.6v6.48q0 .353-.247.6t-.601.247t-.599-.247t-.245-.6m5.519 0V5.846q0-.352.248-.6t.6-.246t.6.247t.245.6v8.268q0 .353-.248.6t-.601.247t-.599-.247t-.245-.6M2.866 18.154v-.885q0-.352.247-.6q.247-.246.6-.246t.6.247t.245.6v.884q0 .353-.248.6t-.6.246t-.6-.247q-.244-.246-.244-.6m5.519 0v-.884q0-.352.247-.6q.248-.246.601-.246t.599.247t.245.6v.884q0 .353-.247.6T9.229 19t-.6-.247t-.244-.6m5.519 0v-.884q0-.352.247-.6q.248-.246.601-.246t.599.247t.245.6v.884q0 .353-.247.6t-.601.246t-.599-.247t-.245-.6m5.519 0v-.884q0-.352.248-.6q.247-.246.6-.246t.6.247t.244.6v.884q0 .353-.247.6t-.601.246t-.599-.247t-.245-.6");
}
</style><path class="rpujjzayk"/>`,
		"fallback": "material-symbols-light:android-cell-dual-4-bar-rounded",
	});
}

export default Component;
