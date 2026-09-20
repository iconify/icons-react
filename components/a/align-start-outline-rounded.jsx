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
		"content": `<style>.m6v47m63c {
  fill: currentColor;
  d: path("M3 4q-.425 0-.712-.288T2 3t.288-.712T3 2h18q.425 0 .713.288T22 3t-.288.713T21 4zm5 6q-.425 0-.712-.288T7 9V8q0-.425.288-.712T8 7h8q.425 0 .713.288T17 8v1q0 .425-.288.713T16 10zm0 6q-.425 0-.712-.288T7 15v-1q0-.425.288-.712T8 13h8q.425 0 .713.288T17 14v1q0 .425-.288.713T16 16z");
}
</style><path class="m6v47m63c"/>`,
		"fallback": "material-symbols:align-start-outline-rounded",
	});
}

export default Component;
