import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii--4nbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii--4nbun"/>`,
		"fallback": "noviair:file-text-check",
	});
}

export default Component;
