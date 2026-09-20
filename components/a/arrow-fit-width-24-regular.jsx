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
		"content": `<style>.ts7x8sbio {
  fill: currentColor;
  d: path("M3 18.25a.75.75 0 0 0 1.5 0V5.75a.75.75 0 0 0-1.5 0zm16.5 0a.75.75 0 0 0 1.5 0V5.75a.75.75 0 0 0-1.5 0zm-5.354-4.196a.75.75 0 0 0 1.133.976l2.37-2.367a.77.77 0 0 0 .351-.664a.77.77 0 0 0-.35-.664l-2.37-2.367l-.085-.073a.75.75 0 0 0-.976.073l-.073.084a.75.75 0 0 0 .073.976l1.221 1.222h-3.784l-.025.002H8.56l1.221-1.222l.08-.094a.75.75 0 0 0-.007-.882L9.78 8.97l-.094-.08a.75.75 0 0 0-.882.007l-.085.073l-2.37 2.367l-.074.053A.79.79 0 0 0 6 12a.77.77 0 0 0 .35.665l2.37 2.367l.085.073a.75.75 0 0 0 1.049-1.05l-.073-.084l-1.221-1.22h3.784l.025-.001h3.071l-1.221 1.22z");
}
</style><path class="ts7x8sbio"/>`,
		"fallback": "fluent:arrow-fit-width-24-regular",
	});
}

export default Component;
