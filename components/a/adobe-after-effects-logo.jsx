import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c4d0f0bno.css';
import '../../css/m/mlneatbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c4d0f0bno"/><path class="mlneatbfz"/></g>`,
		"fallback": "streamline-ultimate:adobe-after-effects-logo",
	});
}

export default Component;
