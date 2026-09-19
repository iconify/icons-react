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
		"content": `<style>.lh4_3wb3c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.393 24.59a11.044 11.044 0 1 1 15.864-3.458");
}

.x34kp4bea {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.48 43.499l-7.53-7.53c-1.625-1.994 1.781-5.328 3.62-3.495l3.786 3.703l-.084-20.428c.095-3.186 5.033-3.445 5.075-.041l.042 9.277c-.06-2.326 4.623-2.548 4.785-.041l.041 2.548c-.012-2.063 4.92-1.744 5.076.322l-.042 3.162c.09-2.21 5.014-2.223 4.992-.04l.073 10.907A1.646 1.646 0 0 1 36.68 43.5h-.011Z");
}
</style><path class="lh4_3wb3c"/><path class="x34kp4bea"/>`,
		"fallback": "arcticons:homewav",
	});
}

export default Component;
