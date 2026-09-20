import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frmldq4_q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="frmldq4_q"/>`,
		"fallback": "streamline-flex:eject-square-solid",
	});
}

export default Component;
