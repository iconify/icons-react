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
		"content": `<style>.ieiv62bwn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.664 15.586q0-.955-.478-1.711L21.53 3.53q.106-.105.163-.243T21.75 3t-.057-.287t-.163-.243q-.052-.053-.113-.094t-.13-.069t-.141-.043T21 2.25t-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094L10.125 12.814q-.756-.478-1.711-.478q-1.346 0-2.298.952l-2.828 2.828q-.952.952-.952 2.298t.952 2.298t2.298.952t2.298-.952l2.828-2.828q.952-.952.952-2.298");
}
</style><path class="ieiv62bwn"/>`,
		"fallback": "uix-solid:awl",
	});
}

export default Component;
