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
		"content": `<style>.k3zl73i7c {
  fill: currentColor;
  d: path("M8.5 1a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5A6.5 6.5 0 0 0 8.5 1M9 7V2.022A5.5 5.5 0 0 1 13.978 7zM7 3.522a.5.5 0 0 0-.545-.498a6 6 0 1 0 6.52 6.52a.5.5 0 0 0-.497-.544H7zM2 9a5 5 0 0 1 4-4.9v5.4a.5.5 0 0 0 .5.5h5.4A5.002 5.002 0 0 1 2 9");
}
</style><path class="k3zl73i7c"/>`,
		"fallback": "fluent:data-pie-16-regular",
	});
}

export default Component;
