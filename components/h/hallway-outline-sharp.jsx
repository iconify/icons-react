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
		"content": `<style>.tdl7fqbai {
  fill: currentColor;
  d: path("M3 22V4h5l4-4l4 4h5v18zm2-2h14V6H5zm1-2h12l-3.75-5l-3 4L9 14zm4.1-14h3.8L12 2.1zM5 20V6z");
}
</style><path class="tdl7fqbai"/>`,
		"fallback": "material-symbols:hallway-outline-sharp",
	});
}

export default Component;
