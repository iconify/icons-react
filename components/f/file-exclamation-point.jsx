import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbi3rb6_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbi3rb6_v"/>`,
		"fallback": "vadivam:file-exclamation-point",
	});
}

export default Component;
