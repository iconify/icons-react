import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hd_k0ub4u {
  fill: currentColor;
  d: path("M22.74 3c3.933 0 5.756 4.884 2.784 7.46L15.49 19.163a4 4 0 0 1-.383.382L13.171 21.2a1 1 0 0 1-.132.09l-4.594 3.984a2.975 2.975 0 0 1-4.5-3.775l5.524-9.231l-5.913-3.43A3.13 3.13 0 0 1 5.126 3zM5.23 22.269a1.474 1.474 0 0 0 2.232 1.87l6.962-6.038a2.168 2.168 0 0 0-.577-3.198l-3.09-1.87zM12.57 4.5c1.109 1.316 1.412 3.277.39 4.958l-1.402 2.305l3.067 1.858a3.64 3.64 0 0 1 1.749 2.79l8.168-7.084C26.465 7.66 25.285 4.5 22.74 4.5zm-7.442 0a1.63 1.63 0 0 0-.818 3.04l5.959 3.456l1.409-2.317C12.79 6.846 11.472 4.5 9.327 4.5z");
}
</style><path class="hd_k0ub4u"/>`,
		"fallback": "fluent:autopilot-28-regular",
	});
}

export default Component;
