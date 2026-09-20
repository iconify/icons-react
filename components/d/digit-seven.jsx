import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tg166bcgl {
  fill: var(--svg-color--fff, #fff);
  d: path("M92.9 27.87H33.54c-.57 0-1.04.46-1.04 1.04v12.94c0 .57.47 1.04 1.04 1.04h34.07l-22.84 59.94c-.12.32-.08.68.11.96s.51.45.86.45H64.6c.43 0 .82-.26.98-.67l28.3-74.3c.12-.32.08-.68-.11-.96c-.21-.27-.53-.44-.87-.44");
}
</style><path class="tg166bcgl"/>`,
		"fallback": "noto-v1:digit-seven",
	});
}

export default Component;
