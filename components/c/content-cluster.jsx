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
		"content": `<style>.ifl6pobir {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1.75q-2.75 0-2.75 2.75q0 2.345 2 2.69v1.602q-3 .354-3 3.708q0 1.22.397 2.043l-1.55 1.549Q6.47 15.75 5.5 15.75q-2.75 0-2.75 2.75t2.75 2.75t2.75-2.75q0-.72-.188-1.251l1.575-1.575q.893.576 2.363.576t2.363-.576l1.575 1.575q-.188.531-.188 1.251q0 2.75 2.75 2.75t2.75-2.75t-2.75-2.75q-.97 0-1.597.342l-1.55-1.549q.397-.823.397-2.043q0-3.354-3-3.708V7.19q2-.345 2-2.69q0-2.75-2.75-2.75");
}
</style><path class="ifl6pobir"/>`,
		"fallback": "uix-solid:content-cluster",
	});
}

export default Component;
