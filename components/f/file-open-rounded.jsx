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
		"content": `<style>.rpmddib1m {
  fill: currentColor;
  d: path("M18 16h3.65q.425 0 .713.288t.287.712t-.287.713t-.713.287H20.4l2.25 2.25q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3L19 19.425v1.225q0 .425-.288.713T18 21.65t-.712-.287T17 20.65V17q0-.425.288-.712T18 16M13 4v4q0 .425.288.713T14 9h4zM6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V13q0 .425-.288.713T19 14h-3q-.425 0-.712.288T15 15v6q0 .425-.288.713T14 22H6q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2");
}
</style><path class="rpmddib1m"/>`,
		"fallback": "material-symbols:file-open-rounded",
	});
}

export default Component;
