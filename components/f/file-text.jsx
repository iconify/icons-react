import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixe1kkbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixe1kkbdy"/>`,
		"fallback": "noviair:file-text",
	});
}

export default Component;
