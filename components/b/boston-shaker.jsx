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
		"content": `<style>.w938s2vpo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.285 12.175q-.264-.326-.583-.537l-1.461-9.255q-.011-.066-.032-.128q-.022-.063-.054-.121q-.033-.058-.075-.11q-.042-.051-.093-.094t-.108-.077t-.119-.057q-.063-.023-.128-.034q-.066-.012-.132-.012h-5q-.066 0-.132.012q-.065.011-.128.034q-.062.023-.119.057q-.058.034-.108.077q-.051.043-.093.094t-.075.11t-.054.121t-.032.128l-1.461 9.255q-.319.211-.583.537q-.751.925-.505 2.09l1.263 6.001q.419 1.985 2.447 1.984h4.16q2.028.001 2.447-1.985l1.263-5.999q.246-1.166-.505-2.091m-2.163-.925H8.878l1.263-8h3.718z");
}
</style><path class="w938s2vpo"/>`,
		"fallback": "uix-solid:boston-shaker",
	});
}

export default Component;
