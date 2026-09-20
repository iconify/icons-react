import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md7z81-3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md7z81-3a"/>`,
		"fallback": "uil:comment-alt",
	});
}

export default Component;
