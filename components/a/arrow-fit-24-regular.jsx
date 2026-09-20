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
		"content": `<style>.k8j-2fsem {
  fill: currentColor;
  d: path("M6.762 7.452a.75.75 0 0 1 .036 1.06L4.476 11h5.774a.75.75 0 0 1 0 1.5H4.476l2.322 2.488a.75.75 0 1 1-1.096 1.024l-3.5-3.75a.75.75 0 0 1 0-1.024l3.5-3.75a.75.75 0 0 1 1.06-.036m10.476 0a.75.75 0 0 0-.036 1.06L19.524 11H13.75a.75.75 0 0 0 0 1.5h5.774l-2.322 2.488a.75.75 0 1 0 1.096 1.024l3.5-3.75a.75.75 0 0 0 0-1.024l-3.5-3.75a.75.75 0 0 0-1.06-.036");
}
</style><path class="k8j-2fsem"/>`,
		"fallback": "fluent:arrow-fit-24-regular",
	});
}

export default Component;
