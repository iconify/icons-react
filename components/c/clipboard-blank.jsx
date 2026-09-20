import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qezco3lak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qezco3lak"/>`,
		"fallback": "uil:clipboard-blank",
	});
}

export default Component;
