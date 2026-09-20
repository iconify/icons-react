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
		"content": `<style>.dml52eh1b {
  fill: currentColor;
  d: path("M2 4.5A1.5 1.5 0 0 1 3.5 3h13a1.5 1.5 0 0 1 .5 2.915V9.5a2.5 2.5 0 0 0-1-.45V6H4v10h1v-3.5a.5.5 0 0 1 .5-.5h4c-.314.418-.5.937-.5 1.5V13H6v3h3v1H3.5a.5.5 0 0 1-.5-.5V5.915A1.5 1.5 0 0 1 2 4.5M3.5 4a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zM15 7.5V9h-1V8H6v2h5.5a2.5 2.5 0 0 0-.45 1H5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5M12 12v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5a1.5 1.5 0 0 1 1.5-1.5zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5m4 5V16h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0");
}
</style><path class="dml52eh1b"/>`,
		"fallback": "fluent:building-retail-toolbox-20-regular",
	});
}

export default Component;
