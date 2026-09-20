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
		"content": `<style>.m8c050b6i {
  fill: currentColor;
  d: path("M12 20.212L2.596 8.923L5.308 3.5h13.384l2.712 5.423zM8.817 8.5h6.366l-2-4h-2.366zm2.683 9.56V9.5H4.392zm1 0l7.108-8.56H12.5zm3.792-9.56h3.766l-2-4h-3.766zm-12.35 0h3.766l2-4H5.942z");
}
</style><path class="m8c050b6i"/>`,
		"fallback": "material-symbols-light:diamond-outline",
	});
}

export default Component;
