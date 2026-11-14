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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jej9ffbxn {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4m-16-5l17 17");
}

.twbdbu88f {
  d: path("M6.46 2.559Q6.727 2.5 7 2.5h6.5l6 6v7.015m-2.012 5.937q-.242.048-.488.048H7q-.123 0-.245-.012t-.243-.036q-.12-.024-.238-.06t-.231-.082t-.221-.105t-.211-.126q-.102-.069-.197-.146q-.095-.078-.182-.165t-.165-.182t-.146-.197t-.126-.211t-.105-.221q-.047-.114-.082-.231t-.06-.238t-.036-.243T4.5 19V8.439");
}
</style><g class="hntgybcog"><path class="twbdbu88f"/><path class="jej9ffbxn"/></g>`,
		"fallback": "uix:file-ignore",
	});
}

export default Component;
