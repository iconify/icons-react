import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs9r7ablm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs9r7ablm"/>`,
		"fallback": "vadivam:file-check-corner",
	});
}

export default Component;
