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
		"content": `<style>.l7_ok9bpj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.453 12.435c.782-4.074-.412-6.935-5.289-6.935H21.018l-1.44 7.182H32.48c.782 0 1.009.412.906 1.317l-1.646 8.52h-8.047l1.235-5.906l-18.604 8.91h13.809l-1.194 5.887l12.265-5.824l-1.646 8.396a1.445 1.445 0 0 1-1.585 1.255H15.091l-1.358 7.244H28.92c4.054.288 7.615-2.757 7.903-6.853v-.123z");
}
</style><path class="l7_ok9bpj"/>`,
		"fallback": "arcticons:eldorado",
	});
}

export default Component;
