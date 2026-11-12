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
		"content": `<style>.arihl3bdb {
  stroke-linejoin: round;
  d: path("M9.17188 12H9.17197");
}

.ghqgw0btr {
  stroke-linejoin: round;
  d: path("M14.8281 12H14.8282");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lii0jv5qd {
  stroke-linejoin: round;
  d: path("M12 14.8286H12.0001");
}

.u0s48-y0n {
  d: path("M12.765 20.4155C14.8777 22.5282 18.3029 22.5282 20.4155 20.4155C22.5282 18.3029 22.5282 14.8777 20.4155 12.765M12.765 20.4155L20.4155 12.765M12.765 20.4155L8.17476 15.8252M20.4155 12.765L19 11.3495M15.8252 8.17476L11.235 3.58447C9.12233 1.47184 5.69709 1.47184 3.58447 3.58447C1.47184 5.69709 1.47184 9.12233 3.58447 11.235L5 12.6505M11.235 3.58447L3.58447 11.235");
}

.vw3528bnl {
  stroke-linejoin: round;
  d: path("M12 9.17139H12.0001");
}
</style><g class="ipq1z-bjh"><path class="u0s48-y0n"/><path class="vw3528bnl"/><path class="arihl3bdb"/><path class="lii0jv5qd"/><path class="ghqgw0btr"/></g>`,
		"fallback": "solar:adhesive-plaster-2-broken",
	});
}

export default Component;
