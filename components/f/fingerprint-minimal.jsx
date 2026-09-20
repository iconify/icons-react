import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qu3o-gbgt.css';
import '../../css/h/h4xfh84tu.css';
import '../../css/m/mbaw2jbyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qu3o-gbgt"/><path class="h4xfh84tu"/><path class="mbaw2jbyf"/></g>`,
		"fallback": "mage:fingerprint-minimal",
	});
}

export default Component;
