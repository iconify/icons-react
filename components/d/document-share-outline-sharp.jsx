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
		"content": `<style>.wg0zb_xro {
  fill: currentColor;
  d: path("M6 20V4zm14 2q-.825 0-1.412-.587T18 19.975l-2.025-1.225q-.225.125-.462.188T15 19q-.825 0-1.412-.587T13 17t.588-1.412T15 15q.275 0 .513.063t.462.187L18 14.05q0-.85.588-1.437T20 12.025t1.413.588t.587 1.412t-.587 1.413t-1.413.587q-.275 0-.513-.062t-.462-.188L17 16.975v.075l2.025 1.2q.225-.125.463-.187T20 18q.825 0 1.413.588T22 20t-.587 1.413T20 22m-8.325 0H4V2h10l6 6v2.025h-2V9h-5V4H6v16h5.675z");
}
</style><path class="wg0zb_xro"/>`,
		"fallback": "material-symbols:document-share-outline-sharp",
	});
}

export default Component;
