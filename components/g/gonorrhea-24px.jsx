import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1f_37bmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e1f_37bmv"/>`,
		"fallback": "healthicons:gonorrhea-24px",
	});
}

export default Component;
