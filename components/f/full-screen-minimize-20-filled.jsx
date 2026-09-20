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
		"content": `<style>.clhsdbcec {
  fill: currentColor;
  d: path("M15 5.5a.5.5 0 0 1-.5-.5V2.75a.75.75 0 0 0-1.5 0V5a2 2 0 0 0 2 2h2.25a.75.75 0 0 0 0-1.5zM5.5 15a.5.5 0 0 0-.5-.5H2.75a.75.75 0 0 1 0-1.5H5a2 2 0 0 1 2 2v2.25a.75.75 0 0 1-1.5 0zm9 0a.5.5 0 0 1 .5-.5h2.25a.75.75 0 0 0 0-1.5H15a2 2 0 0 0-2 2v2.25a.75.75 0 0 0 1.5 0zm-9-10a.5.5 0 0 1-.5.5H2.75a.75.75 0 0 0 0 1.5H5a2 2 0 0 0 2-2V2.75a.75.75 0 0 0-1.5 0z");
}
</style><path class="clhsdbcec"/>`,
		"fallback": "fluent:full-screen-minimize-20-filled",
	});
}

export default Component;
