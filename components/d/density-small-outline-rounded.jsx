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
		"content": `<style>.kfdzqwb-o {
  fill: currentColor;
  d: path("M4 22q-.425 0-.712-.288T3 21t.288-.712T4 20h16q.425 0 .713.288T21 21t-.288.713T20 22zm0-6q-.425 0-.712-.288T3 15t.288-.712T4 14h16q.425 0 .713.288T21 15t-.288.713T20 16zm0-6q-.425 0-.712-.288T3 9t.288-.712T4 8h16q.425 0 .713.288T21 9t-.288.713T20 10zm0-6q-.425 0-.712-.288T3 3t.288-.712T4 2h16q.425 0 .713.288T21 3t-.288.713T20 4z");
}
</style><path class="kfdzqwb-o"/>`,
		"fallback": "material-symbols:density-small-outline-rounded",
	});
}

export default Component;
