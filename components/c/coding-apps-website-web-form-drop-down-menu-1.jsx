import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u-7xzabfq.css';
import '../../css/b/btss-ebom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u-7xzabfq"/><path class="btss-ebom"/></g>`,
		"fallback": "streamline-ultimate:coding-apps-website-web-form-drop-down-menu-1",
	});
}

export default Component;
