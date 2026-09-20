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
		"content": `<style>.ln-aq5g3j {
  fill: currentColor;
  d: path("M6 21q-.425 0-.712-.288T5 20v-9q0-.425.288-.712T6 10t.713.288T7 11v8h8q.425 0 .713.288T16 20t-.288.713T15 21zm5-5q-.425 0-.712-.288T10 15V6q0-.425.288-.712T11 5t.713.288T12 6v8h8q.425 0 .713.288T21 15t-.288.713T20 16z");
}
</style><path class="ln-aq5g3j"/>`,
		"fallback": "material-symbols:arrows-more-down-outline-rounded",
	});
}

export default Component;
