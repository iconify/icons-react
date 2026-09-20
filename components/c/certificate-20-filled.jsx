import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f8ben7_nv {
  fill: currentColor;
  d: path("M4 3a2 2 0 0 0-2 2v3.671a4.5 4.5 0 1 1 7 5.657V15h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm1.5 4a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1zm5.5 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M5.5 15a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m-2.5.242A4.5 4.5 0 0 0 5.5 16c.925 0 1.785-.28 2.5-.758V18a.5.5 0 0 1-.8.4l-1.4-1.05a.5.5 0 0 0-.6 0L3.8 18.4A.5.5 0 0 1 3 18z");
}
</style><path class="f8ben7_nv"/>`,
		"fallback": "fluent:certificate-20-filled",
	});
}

export default Component;
