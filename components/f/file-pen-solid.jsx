import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu3ugdc7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu3ugdc7w"/>`,
		"fallback": "iconaut:file-pen-solid",
	});
}

export default Component;
