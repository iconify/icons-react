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
		"content": `<style>.ucng4bctb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 1.75h10q2.25 0 2.25 2.25T16 6.25h-.75v2.06q2.538.419 3.763 3.779q.815 2.237 1.822 2.74q.134.067.232.18q.097.112.145.254q.047.141.036.29q-.01.149-.077.282q-.067.134-.18.232q-.112.097-.254.145q-.141.047-.29.036q-.149-.01-.282-.077q-1.542-.771-2.561-3.568q-.842-2.309-2.354-2.749v7.896H16q2.25 0 2.25 2.25T16 22.25H6q-2.25 0-2.25-2.25T6 17.75h.75V6.25H6Q3.75 6.25 3.75 4T6 1.75m2.25 8v1.5h5.5v-1.5zm5.5-1.5h-5.5v-2h5.5zm0 4.5h-5.5v1.5h5.5zm-5.5 5h5.5v-2h-5.5z");
}
</style><path class="ucng4bctb"/>`,
		"fallback": "uix-solid:bobbin",
	});
}

export default Component;
