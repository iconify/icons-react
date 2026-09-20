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
		"content": `<style>.lnexxwbwa {
  d: path("m3 13.659l3.936-3.476l4.694 7.686l-5.17 1.455z");
}

.qie09hkjf {
  fill: var(--svg-color--eab74c, #eab74c);
}

.tqlgpdj6t {
  fill-rule: evenodd;
  d: path("M15.867 10.093h.626l-4.456 7.177l-4.507-7.177h6.67l-1.388 2.592l.7 1.117zm-7.42.452h2.372l2.397 3.746l-1.18 1.955zm5.008 0h-2.034l1.107 1.663z");
}

.ulud__bjr {
  d: path("M8.511 4.676L7.295 9.648h9.388l-1.254-4.972zM21 13.659l-3.936-3.476l-4.694 7.686l5.171 1.455z");
}
</style><g class="qie09hkjf"><path class="ulud__bjr"/><path clip-rule="evenodd" class="tqlgpdj6t"/><path class="lnexxwbwa"/></g>`,
		"fallback": "token-branded:dep",
	});
}

export default Component;
