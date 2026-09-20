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
		"content": `<style>.oq3vgqond {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h10.175q.4 0 .763.15t.637.425l3.85 3.85q.275.275.425.638t.15.762V19q0 .825-.587 1.413T19 21zm0-2h14V9h-3q-.425 0-.712-.288T15 8V5H5zm11-2q.425 0 .713-.288T17 16t-.288-.712T16 15H8q-.425 0-.712.288T7 16t.288.713T8 17zm-5-8q.425 0 .713-.288T12 8t-.288-.712T11 7H8q-.425 0-.712.288T7 8t.288.713T8 9zm5 4q.425 0 .713-.288T17 12t-.288-.712T16 11H8q-.425 0-.712.288T7 12t.288.713T8 13zM5 5v4zv14z");
}
</style><path class="oq3vgqond"/>`,
		"fallback": "material-symbols:feed-outline-rounded",
	});
}

export default Component;
