import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mlneatbfz.css';
import '../../css/i/i-218secy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mlneatbfz"/><path class="i-218secy"/></g>`,
		"fallback": "streamline-ultimate:coding-apps-website-web-form-text-area-1",
	});
}

export default Component;
