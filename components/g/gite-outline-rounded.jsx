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
		"content": `<style>.y0gbembrg {
  fill: currentColor;
  d: path("M4 19q-.825 0-1.412-.587T2 17v-6.175q0-.4.15-.762t.425-.638l2.85-2.85q.275-.275.638-.425T6.825 6H7V5q0-.425.288-.712T8 4t.713.288T9 5v1h8.175q.4 0 .763.15t.637.425l2.85 2.85q.275.275.425.638t.15.762V17q0 .825-.587 1.413T20 19zm12-2h4v-6.175l-2-2l-2 2zm-2 0v-5H4v5z");
}
</style><path class="y0gbembrg"/>`,
		"fallback": "material-symbols:gite-outline-rounded",
	});
}

export default Component;
