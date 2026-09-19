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
		"content": `<style>.hlo10kb6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.502 26.97v-2.383c0-.983.805-1.787 1.79-1.787h8.253m.577-1.259c-1.28-1.352-3.99-2.27-5.809-2.231c-2.734.007-5.3.792-4.734 3.142");
}

.q8j9utb4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 27.565V22.61c0-.983-.806-1.787-1.784-1.788h-23.16c-.985 0-1.79.804-1.79 1.787v4.765M5.502 35.333V12.661M42.5 18.66v16.68M5.502 27.571H42.5v4.17H5.502z");
}
</style><path class="hlo10kb6x"/><path class="q8j9utb4o"/>`,
		"fallback": "arcticons:emoji-bed",
	});
}

export default Component;
