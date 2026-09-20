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
		"content": `<style>.dl9oc7bxp {
  fill: currentColor;
  d: path("M2.22 2.22a.75.75 0 0 1 1.06 0l18.5 18.5a.75.75 0 0 1-1.06 1.06L16.94 18H10v-1q.18-.24.331-.5h5.108L3.837 4.897a1.25 1.25 0 0 0-.336.853v3.919A5 5 0 0 0 2.001 11V5.75c0-.744.296-1.417.776-1.912L2.22 3.28a.75.75 0 0 1 0-1.06M9 21.249l-.007.104a.75.75 0 0 1-1.173.51l-1.819-1.272l-1.82 1.272l-.09.055A.75.75 0 0 1 3 21.249l.001-3.246A4.98 4.98 0 0 0 6 19a4.98 4.98 0 0 0 3.001-1zM6.001 10A4 4 0 1 1 6 18.001A4 4 0 0 1 6 10m13.25-7A2.75 2.75 0 0 1 22 5.75v9.5c0 .97-.503 1.819-1.26 2.309l-1.117-1.117a1.25 1.25 0 0 0 .877-1.192v-9.5c0-.69-.56-1.25-1.25-1.25H7.681L6.182 3zm-2 4a.75.75 0 0 1 0 1.5h-5.57L10.18 7z");
}
</style><path class="dl9oc7bxp"/>`,
		"fallback": "fluent:certificate-off-24-regular",
	});
}

export default Component;
