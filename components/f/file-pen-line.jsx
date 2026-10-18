import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw3hmccmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw3hmccmf"/>`,
		"fallback": "vadivam:file-pen-line",
	});
}

export default Component;
