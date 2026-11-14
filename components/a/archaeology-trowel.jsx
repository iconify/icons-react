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
		"content": `<style>.oc15-ybrr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19.248 4.752q.659.659.659 1.591t-.66 1.591L17.48 9.702q-.659.66-1.591.66q-.532 0-.975-.215l-.793.793l.946.946q.954.953.681 2.273t-1.526 1.818L9.326 17.92q-1.528.606-2.69-.556t-.556-2.69l1.943-4.896q.497-1.253 1.818-1.526q1.32-.273 2.273.681l.946.946l.793-.793q-.215-.443-.215-.975q0-.932.66-1.591l1.768-1.768q.659-.66 1.591-.66t1.591.66");
}
</style><path class="oc15-ybrr"/>`,
		"fallback": "uix-solid:archaeology-trowel",
	});
}

export default Component;
