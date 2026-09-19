import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnmvchc5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vnmvchc5b"/>`,
		"fallback": "iconamoon:folder-check-fill",
	});
}

export default Component;
