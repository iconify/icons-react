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
		"content": `<style>.d907dbbvg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m6.606 7.59l1.87 1.007q.704.379 1.128.925q.812-.772 2.396-.772t2.396.772q.424-.546 1.128-.925l1.87-1.007h.001q1.476-.795 2.915.065q1.44.859 1.44 2.536v3.618q0 1.677-1.44 2.536q-1.439.86-2.916.065l-1.87-1.007q-.704-.379-1.128-.925q-.812.772-2.396.772t-2.396-.772q-.424.546-1.128.925l-1.87 1.007q-1.477.795-2.916-.065q-1.44-.859-1.44-2.536v-3.618q0-1.677 1.44-2.536q1.439-.86 2.915-.065z");
}
</style><path class="d907dbbvg"/>`,
		"fallback": "uix-solid:bachelor-party",
	});
}

export default Component;
