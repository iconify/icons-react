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
		"content": `<style>.gg63cf2tk {
  fill: currentColor;
  d: path("M7 13q-.425 0-.712-.288T6 12t.288-.712T7 11h10q.425 0 .713.288T18 12t-.288.713T17 13z");
}
</style><path class="gg63cf2tk"/>`,
		"fallback": "material-symbols:check-indeterminate-small-rounded",
	});
}

export default Component;
