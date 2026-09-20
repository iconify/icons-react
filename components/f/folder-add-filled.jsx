import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iedg4rbcc.css';
import '../../css/k/kdpqefbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iedg4rbcc"/><path class="kdpqefbdy"/>`,
		"fallback": "tdesign:folder-add-filled",
	});
}

export default Component;
