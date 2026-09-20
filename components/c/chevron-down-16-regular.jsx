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
		"content": `<style>.sfzm4zcuz {
  fill: currentColor;
  d: path("M3.146 5.646a.5.5 0 0 1 .708 0L8 9.793l4.146-4.147a.5.5 0 0 1 .708.708l-4.5 4.5a.5.5 0 0 1-.708 0l-4.5-4.5a.5.5 0 0 1 0-.708");
}
</style><path class="sfzm4zcuz"/>`,
		"fallback": "fluent:chevron-down-16-regular",
	});
}

export default Component;
