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
		"content": `<style>.xqiiysm4m {
  fill: currentColor;
  d: path("M6 18V2h16v16zm2-2h12V4H8zm-6 6V6h2v14h14v2zM8 4v12zm5.288 5.713Q13 9.425 13 9t.288-.712T14 8t.713.288T15 9t-.288.713T14 10t-.712-.288M14 15q2.025-1.725 3.013-3.187T18 9.1q0-1.875-1.213-2.988T14 5t-2.787 1.113T10 9.1q0 1.25.988 2.713T14 15");
}
</style><path class="xqiiysm4m"/>`,
		"fallback": "material-symbols:file-map-stack-outline-sharp",
	});
}

export default Component;
