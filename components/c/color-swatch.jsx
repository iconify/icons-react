import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wwci4obui.css';
import '../../css/a/ar7v4zcbf.css';
import '../../css/m/mv28m9o7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wwci4obui"/><path class="ar7v4zcbf"/><path class="mv28m9o7o"/></g>`,
		"fallback": "mage:color-swatch",
	});
}

export default Component;
