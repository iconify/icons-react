import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr-_ztizn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr-_ztizn"/>`,
		"fallback": "boxicons:folder-down-arrow-filled",
	});
}

export default Component;
