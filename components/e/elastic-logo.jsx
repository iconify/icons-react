import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gz9h8zqkj.css';
import '../../css/i/i18b5wbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gz9h8zqkj"/><path class="i18b5wbyz"/></g>`,
		"fallback": "streamline-logos:elastic-logo",
	});
}

export default Component;
