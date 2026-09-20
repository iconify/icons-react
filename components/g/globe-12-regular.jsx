import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gawtzxbom {
  fill: currentColor;
  d: path("M11 6A5 5 0 1 0 1 6a5 5 0 0 0 10 0m-6.99.5c.052 1.307.305 2.467.681 3.281A4 4 0 0 1 2.031 6.5zm1 0h1.98c-.047 1.075-.24 2.005-.504 2.664c-.153.383-.31.625-.434.756L6 9.97l-.052-.05c-.123-.13-.28-.373-.434-.756c-.264-.66-.457-1.589-.503-2.664m1.98-1H5.01c.047-1.075.24-2.005.504-2.664c.153-.383.31-.625.434-.756L6 2.03l.052.05c.123.13.28.373.434.756c.264.66.457 1.589.503 2.664m1 1H9.97a4 4 0 0 1-2.66 3.281c.376-.814.63-1.974.681-3.281m1.979-1H7.99c-.052-1.307-.305-2.467-.681-3.281A4 4 0 0 1 9.969 5.5m-5.96 0H2.032a4 4 0 0 1 2.66-3.281c-.376.814-.63 1.974-.681 3.281");
}
</style><path class="gawtzxbom"/>`,
		"fallback": "fluent:globe-12-regular",
	});
}

export default Component;
