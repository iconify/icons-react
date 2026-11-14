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
		"content": `<style>.lkzenacir {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 12q0-2.75 2.75-2.75T7.75 12T5 14.75T2.25 12M12 9.25q-2.75 0-2.75 2.75T12 14.75T14.75 12T12 9.25M16.25 12q0-2.75 2.75-2.75T21.75 12T19 14.75T16.25 12");
}
</style><path class="lkzenacir"/>`,
		"fallback": "uix-solid:dots-three",
	});
}

export default Component;
