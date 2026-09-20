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
		"content": `<style>.zevks4bkm {
  fill: currentColor;
  d: path("M8 1.5a.5.5 0 0 1 .5-.5A6.5 6.5 0 0 1 15 7.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5zM7 3.522a.5.5 0 0 0-.545-.498a6 6 0 1 0 6.52 6.52a.5.5 0 0 0-.497-.544H7z");
}
</style><path class="zevks4bkm"/>`,
		"fallback": "fluent:data-pie-16-filled",
	});
}

export default Component;
