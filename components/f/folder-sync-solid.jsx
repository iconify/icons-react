import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqs8dcnai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqs8dcnai"/>`,
		"fallback": "iconaut:folder-sync-solid",
	});
}

export default Component;
