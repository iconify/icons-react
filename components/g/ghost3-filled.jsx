import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyf75iblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyf75iblm"/>`,
		"fallback": "reicon:ghost3-filled",
	});
}

export default Component;
