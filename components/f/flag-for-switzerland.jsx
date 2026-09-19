import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.io9k0vbeq {
  fill: var(--svg-color--fff, #fff);
  d: path("M47 27H37V17H27v10H17v10h10v10h10V37h10z");
}

.yvb0blvjs {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--ed4c5c, #ed4c5c);
}
</style><circle class="yvb0blvjs"/><path class="io9k0vbeq"/>`,
		"fallback": "emojione:flag-for-switzerland",
	});
}

export default Component;
