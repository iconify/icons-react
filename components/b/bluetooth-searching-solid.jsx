import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8d_vgbno.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m8d_vgbno"/>`,
		"fallback": "streamline-flex:bluetooth-searching-solid",
	});
}

export default Component;
