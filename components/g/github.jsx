import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyy73i5ku.css';
import '../../css/e/e_vnnobll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyy73i5ku"/><path class="e_vnnobll"/>`,
		"fallback": "uim:github",
	});
}

export default Component;
