import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou-hkcell.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ou-hkcell"/>`,
		"fallback": "ix:aas-project-generic-filled",
	});
}

export default Component;
