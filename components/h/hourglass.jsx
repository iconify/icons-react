import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdhdh5hpt.css';
import '../../css/k/keuh4feao.css';
import '../../css/h/hu_cubcac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdhdh5hpt"/><path class="keuh4feao"/><path class="hu_cubcac"/>`,
		"fallback": "withicons-bauhaus:hourglass",
	});
}

export default Component;
