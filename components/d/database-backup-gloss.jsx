import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf5x55bnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf5x55bnt"/>`,
		"fallback": "withicons:database-backup-gloss",
	});
}

export default Component;
