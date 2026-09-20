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
		"content": `<style>.jubx-fz_z {
  fill: currentColor;
  d: path("M3 22q-.425 0-.712-.288T2 21t.288-.712T3 20h4v-2q0-.425.288-.712T8 17h8q.425 0 .713.288T17 18v2h4q.425 0 .713.288T22 21t-.288.713T21 22zM8 7q-.425 0-.712-.288T7 6V4H3q-.425 0-.712-.288T2 3t.288-.712T3 2h18q.425 0 .713.288T22 3t-.288.713T21 4h-4v2q0 .425-.288.713T16 7z");
}
</style><path class="jubx-fz_z"/>`,
		"fallback": "material-symbols:align-space-between-rounded",
	});
}

export default Component;
