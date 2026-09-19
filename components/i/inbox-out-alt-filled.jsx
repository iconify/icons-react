import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnv98eadn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xnv98eadn"/>`,
		"fallback": "griddy-icons:inbox-out-alt-filled",
	});
}

export default Component;
