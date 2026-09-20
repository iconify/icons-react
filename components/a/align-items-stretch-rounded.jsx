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
		"content": `<style>.aq7qqwblh {
  fill: currentColor;
  d: path("M8 18q-.425 0-.712-.288T7 17V7q0-.425.288-.712T8 6h1q.425 0 .713.288T10 7v10q0 .425-.288.713T9 18zm7 0q-.425 0-.712-.288T14 17V7q0-.425.288-.712T15 6h1q.425 0 .713.288T17 7v10q0 .425-.288.713T16 18zM3 22q-.425 0-.712-.288T2 21t.288-.712T3 20h18q.425 0 .713.288T22 21t-.288.713T21 22zM3 4q-.425 0-.712-.288T2 3t.288-.712T3 2h18q.425 0 .713.288T22 3t-.288.713T21 4z");
}
</style><path class="aq7qqwblh"/>`,
		"fallback": "material-symbols:align-items-stretch-rounded",
	});
}

export default Component;
