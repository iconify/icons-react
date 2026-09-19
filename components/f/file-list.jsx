import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emd4_pw8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="emd4_pw8h"/>`,
		"fallback": "griddy-icons:file-list",
	});
}

export default Component;
