import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/keqss3brm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="keqss3brm"/>`,
		"fallback": "tabler:brand-deezer",
	});
}

export default Component;
