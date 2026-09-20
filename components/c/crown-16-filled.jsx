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
		"content": `<style>.zd4kjrbrz {
  fill: currentColor;
  d: path("m10.399 5.718l-1.64-2.066a1 1 0 1 0-1.517 0l-1.64 2.066a.5.5 0 0 1-.606.142L2.485 4.676Q2.5 4.59 2.5 4.5a1 1 0 1 0-.91.996l1.3 6.5A1.25 1.25 0 0 0 4.114 13h7.77a1.25 1.25 0 0 0 1.226-1.005l1.3-6.499q.044.004.089.004a1 1 0 1 0-.985-.824l-2.51 1.184a.5.5 0 0 1-.605-.142M8 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2");
}
</style><path class="zd4kjrbrz"/>`,
		"fallback": "fluent:crown-16-filled",
	});
}

export default Component;
