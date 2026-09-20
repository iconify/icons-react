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
		"content": `<style>.zu-1gbc7o {
  fill: currentColor;
  d: path("M9.5 3H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.5zM5.646 7.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 1 1-.708.708L6.5 8.707V11.5a.5.5 0 0 1-1 0V8.707l-.646.647a.5.5 0 1 1-.708-.708zM10.5 16H15a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-4.5zm3.854-4.146a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708l.646.647V7.5a.5.5 0 0 1 1 0v2.793l.646-.647a.5.5 0 0 1 .708.708z");
}
</style><path class="zu-1gbc7o"/>`,
		"fallback": "fluent:elevator-20-filled",
	});
}

export default Component;
