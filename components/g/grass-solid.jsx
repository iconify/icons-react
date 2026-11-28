import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x67qmvbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x67qmvbxp"/>`,
		"fallback": "iconaut:grass-solid",
	});
}

export default Component;
