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
		"content": `<style>.am5_k-ggm {
  fill: currentColor;
  d: path("M5 21V11q-.825 0-1.412-.587T3 9V3.7q0-.3.2-.5t.5-.2t.5.2t.2.5V7h.9V3.7q0-.3.2-.5T6 3t.5.2t.2.5V7h.9V3.7q0-.3.2-.5t.5-.2t.5.2t.2.5V9q0 .825-.587 1.413T7 11v10zm7 0V10.9q-1.05-.5-1.525-1.562T10 7.1q0-1.575.788-2.837T13 3t2.213 1.263T16 7.1q0 1.175-.475 2.238T14 10.9V21zm5 0V3q1.65 0 2.825 1.175T21 7v6h-2v8z");
}
</style><path class="am5_k-ggm"/>`,
		"fallback": "material-symbols:flatware",
	});
}

export default Component;
