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
		"content": `<style>.s-vgycc8v {
  fill: currentColor;
  d: path("M5 13q-.425 0-.712-.288T4 12t.288-.712T5 11h14q.425 0 .713.288T20 12t-.288.713T19 13z");
}
</style><path class="s-vgycc8v"/>`,
		"fallback": "material-symbols:horizontal-rule-rounded",
	});
}

export default Component;
