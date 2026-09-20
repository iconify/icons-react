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
		"content": `<style>.aom_zfbaf {
  fill: currentColor;
  d: path("M13 6a2 2 0 1 0-1.497-.674L9.965 7.248A2 2 0 0 0 7.171 9.81l-2.51 1.076a2 2 0 1 0 .331.946l2.833-1.214a2 2 0 0 0 2.87-2.682l1.64-2.05q.314.111.665.113m0-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-9 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m6-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0");
}
</style><path class="aom_zfbaf"/>`,
		"fallback": "fluent:data-line-16-regular",
	});
}

export default Component;
