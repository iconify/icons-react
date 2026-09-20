import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktv_hgbxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ktv_hgbxb"/>`,
		"fallback": "reicon:dumbbells",
	});
}

export default Component;
