import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w71c_izcc.css';
import '../../css/v/vawhvpbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w71c_izcc"/><path clip-rule="evenodd" class="vawhvpbke"/>`,
		"fallback": "basil:folder-block-outline",
	});
}

export default Component;
