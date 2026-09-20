import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v8jfpyu2f.css';
import '../../css/g/g5e_usb1u.css';
import '../../css/o/o453h0bes.css';
import '../../css/q/q_hnbkb8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="v8jfpyu2f"/><path class="g5e_usb1u"/><path clip-rule="evenodd" class="o453h0bes"/><path class="q_hnbkb8u"/></g>`,
		"fallback": "streamline-logos:amazon-logo",
	});
}

export default Component;
