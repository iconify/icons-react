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
		"content": `<style>.g0pmo305k {
  fill: currentColor;
  d: path("M3 22q-.425 0-.712-.288T2 21t.288-.712T3 20h18q.425 0 .713.288T22 21t-.288.713T21 22zm8.5-4q-.425 0-.712-.288T10.5 17V5q0-.425.288-.712T11.5 4h1q.425 0 .713.288T13.5 5v12q0 .425-.288.713T12.5 18z");
}
</style><path class="g0pmo305k"/>`,
		"fallback": "material-symbols:align-flex-end-outline-rounded",
	});
}

export default Component;
