import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge_mu3bul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge_mu3bul"/>`,
		"fallback": "tabler:folder-check",
	});
}

export default Component;
