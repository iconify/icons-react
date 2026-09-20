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
		"content": `<style>.l0d4p-36b {
  fill: currentColor;
  d: path("M3 4q-.425 0-.712-.288T2 3t.288-.712T3 2h18q.425 0 .713.288T22 3t-.288.713T21 4zm8.5 16q-.425 0-.712-.288T10.5 19V7q0-.425.288-.712T11.5 6h1q.425 0 .713.288T13.5 7v12q0 .425-.288.713T12.5 20z");
}
</style><path class="l0d4p-36b"/>`,
		"fallback": "material-symbols:align-flex-start-rounded",
	});
}

export default Component;
