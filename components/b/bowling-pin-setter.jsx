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
		"content": `<style>.m8fvqsbae {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.625 1.75h12.75q3.375 0 3.375 3.375v.25q0 3.375-3.375 3.375H16.75v1.576q1.5.337 1.5 2.174q0 1.165-.541 2.001q2.26 3.064.177 6.396q-.051.081-.12.147t-.152.112q-.084.046-.176.07q-.093.024-.188.024h-2.5q-.095 0-.188-.024q-.092-.024-.176-.07t-.152-.112q-.069-.066-.12-.147q-2.083-3.332.177-6.396q-.541-.836-.541-2.001q0-1.837 1.5-2.174V8.75h-6.5v1.576q1.5.337 1.5 2.174q0 1.165-.541 2.001q2.26 3.064.177 6.396q-.051.081-.12.147t-.152.112t-.176.07t-.188.024h-2.5q-.095 0-.188-.024q-.092-.024-.176-.07t-.152-.112q-.069-.066-.12-.147q-2.083-3.332.177-6.396q-.541-.836-.541-2.001q0-1.837 1.5-2.174V8.75H5.625q-1.398 0-2.386-.989q-.989-.988-.989-2.386v-.25q0-1.398.989-2.386q.988-.989 2.386-.989");
}
</style><path class="m8fvqsbae"/>`,
		"fallback": "uix-solid:bowling-pin-setter",
	});
}

export default Component;
