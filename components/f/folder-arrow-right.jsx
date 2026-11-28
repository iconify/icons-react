import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsuuse3db.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsuuse3db"/>`,
		"fallback": "noviair:folder-arrow-right",
	});
}

export default Component;
