import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gi3-8pbkf.css';
import '../../css/i/i611vin5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gi3-8pbkf"/><rect transform="matrix(0 -1 -1 0 20.37 17.1)" class="i611vin5t"/></g>`,
		"fallback": "andrsrxn:hq",
	});
}

export default Component;
