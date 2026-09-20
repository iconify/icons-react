import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nij2vmbts {
  fill: currentColor;
  d: path("M12.5 9H12V4.085A1.5 1.5 0 0 1 13 5.5v3.55a2.5 2.5 0 0 0-.5-.05M6.854 4.732L11 8.88V3.5A1.5 1.5 0 0 0 9.5 2h-5A1.5 1.5 0 0 0 3 3.5v.55Q3.243 4 3.5 4h1.586a2.5 2.5 0 0 1 1.768.732M3.5 5A1.5 1.5 0 0 0 2 6.5V12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-.5a1.5 1.5 0 0 0-1.5-1.5h-1.586a.5.5 0 0 1-.353-.146L6.146 5.439A1.5 1.5 0 0 0 5.086 5z");
}
</style><path class="nij2vmbts"/>`,
		"fallback": "fluent:document-folder-16-filled",
	});
}

export default Component;
