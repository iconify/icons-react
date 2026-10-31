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
		"content": `<style>.igvxgy9bz {
  fill: currentColor;
  d: path("M8 9a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm2-2.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5h-4.269A2.98 2.98 0 0 0 11 16v-5a3 3 0 0 0-3-3H4V3.5A1.5 1.5 0 0 1 5.5 2H10zM3.879 16h1.128v-1.628h.506q.925 0 1.473-.464q.552-.464.552-1.29q0-.802-.492-1.21Q6.557 11 5.62 11H3.88zm1.616-4.136q.412.001.632.206q.224.206.224.586q0 .412-.227.631t-.646.22h-.471v-1.643zM15.75 7H11.5a.5.5 0 0 1-.5-.5V2.25z");
}
</style><path class="igvxgy9bz"/>`,
		"fallback": "fluent:document-powerpoint-20-filled",
	});
}

export default Component;
