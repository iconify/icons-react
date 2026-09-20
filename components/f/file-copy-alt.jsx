import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebnkloppm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebnkloppm"/>`,
		"fallback": "uil:file-copy-alt",
	});
}

export default Component;
