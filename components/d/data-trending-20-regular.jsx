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
		"content": `<style>.hg8nsactd {
  fill: currentColor;
  d: path("M2.5 2a.5.5 0 0 1 .5.5v13A1.5 1.5 0 0 0 4.5 17h13a.5.5 0 0 1 0 1h-13A2.5 2.5 0 0 1 2 15.5v-13a.5.5 0 0 1 .5-.5M12 5.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6.707l-4.646 4.647a.5.5 0 0 1-.708 0L9 9.707l-3.146 3.147a.5.5 0 0 1-.708-.708l3.5-3.5a.5.5 0 0 1 .708 0L11 10.293L15.293 6H12.5a.5.5 0 0 1-.5-.5");
}
</style><path class="hg8nsactd"/>`,
		"fallback": "fluent:data-trending-20-regular",
	});
}

export default Component;
