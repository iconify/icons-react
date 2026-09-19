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
		"content": `<style>.htnvsqbki {
  cx: 26px;
  cy: 32px;
  r: 14.1px;
  fill: var(--svg-color--ed4c5c, #ed4c5c);
}

.hzzz1jv6x {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--699635, #699635);
}

.v4b77y8vr {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--75a843, #75a843);
}
</style><circle class="v4b77y8vr"/><circle class="hzzz1jv6x"/><circle class="htnvsqbki"/>`,
		"fallback": "emojione:flag-for-flag-bangladesh",
	});
}

export default Component;
