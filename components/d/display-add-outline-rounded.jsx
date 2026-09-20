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
		"content": `<style>.ji68w9r4k {
  fill: currentColor;
  d: path("M4 5v12zm4 14H4q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h8.175q.425 0 .713.288t.287.712t-.288.713t-.712.287H4v12h16v-5.45q0-.425.288-.712T21 10.55t.713.288t.287.712V17q0 .825-.587 1.413T20 19h-4v1q0 .425-.288.713T15 21H9q-.425 0-.712-.288T8 20zM18 6h-2q-.425 0-.712-.288T15 5t.288-.712T16 4h2V2q0-.425.288-.712T19 1t.713.288T20 2v2h2q.425 0 .713.288T23 5t-.288.713T22 6h-2v2q0 .425-.288.713T19 9t-.712-.288T18 8z");
}
</style><path class="ji68w9r4k"/>`,
		"fallback": "material-symbols:display-add-outline-rounded",
	});
}

export default Component;
