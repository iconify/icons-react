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
		"content": `<style>.t2xa7abzb {
  fill: currentColor;
  d: path("M2 22V2h20v16H6zm10-7q.425 0 .713-.288T13 14t-.288-.712T12 13t-.712.288T11 14t.288.713T12 15m-1-4h2V5h-2z");
}
</style><path class="t2xa7abzb"/>`,
		"fallback": "material-symbols:feedback-sharp",
	});
}

export default Component;
