import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pj3-xpbck {
  fill: currentColor;
  d: path("M3.5 14C3.5 8.201 8.201 3.5 14 3.5S24.5 8.201 24.5 14S19.799 24.5 14 24.5S3.5 19.799 3.5 14M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12s12-5.373 12-12S20.627 2 14 2M8.083 9.698c-.388-1.01.604-2.003 1.615-1.615l4.995 1.92a5.75 5.75 0 0 1 3.305 3.304l1.919 4.995c.388 1.01-.605 2.003-1.615 1.615l-4.995-1.92a5.75 5.75 0 0 1-3.305-3.304zm1.602-.013l1.717 4.47a4.25 4.25 0 0 0 2.443 2.443l4.47 1.717l-1.717-4.47a4.25 4.25 0 0 0-2.443-2.443z");
}
</style><path class="pj3-xpbck"/>`,
		"fallback": "fluent:compass-northwest-28-regular",
	});
}

export default Component;
