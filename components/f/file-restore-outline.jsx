import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifzak3byz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifzak3byz"/>`,
		"fallback": "mdi:file-restore-outline",
	});
}

export default Component;
