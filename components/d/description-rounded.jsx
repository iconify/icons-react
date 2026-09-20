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
		"content": `<style>.t2xr28o0y {
  fill: currentColor;
  d: path("M9 18h6q.425 0 .713-.288T16 17t-.288-.712T15 16H9q-.425 0-.712.288T8 17t.288.713T9 18m0-4h6q.425 0 .713-.288T16 13t-.288-.712T15 12H9q-.425 0-.712.288T8 13t.288.713T9 14m-3 8q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V20q0 .825-.587 1.413T18 22zm7-14q0 .425.288.713T14 9h4l-5-5z");
}
</style><path class="t2xr28o0y"/>`,
		"fallback": "material-symbols:description-rounded",
	});
}

export default Component;
