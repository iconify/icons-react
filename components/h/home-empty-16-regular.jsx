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
		"content": `<style>.rkoqsyl2o {
  fill: currentColor;
  d: path("M7.313 1.262a1 1 0 0 1 1.374 0l4.844 4.579c.3.283.469.678.469 1.09v5.57a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 12.5V6.93c0-.412.17-.807.47-1.09zM3.156 6.568A.5.5 0 0 0 3 6.93v5.57a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V6.93a.5.5 0 0 0-.156-.363L8 1.988z");
}
</style><path class="rkoqsyl2o"/>`,
		"fallback": "fluent:home-empty-16-regular",
	});
}

export default Component;
