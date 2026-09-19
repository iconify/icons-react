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
		"content": `<style>.mscfjm2db {
  cx: 24px;
  cy: 25.219px;
  r: 7.368px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rgpqjykzg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m37.782 20.741l-3.27 1.063m-1.994 15.139l-4.187-5.763m-12.849 5.763l2.021-2.782m-7.285-13.42l3.27 1.063m30.601-3.112a8.316 8.316 0 0 0-11.875-4.779a8.351 8.351 0 1 0-16.428 0a8.351 8.351 0 1 0-5.077 15.625A8.35 8.35 0 1 0 24 39.194a8.351 8.351 0 1 0 13.291-9.656a8.316 8.316 0 0 0 6.798-10.846M24 10.728v3.439");
}
</style><circle class="mscfjm2db"/><path class="rgpqjykzg"/>`,
		"fallback": "arcticons:flora-incognita",
	});
}

export default Component;
