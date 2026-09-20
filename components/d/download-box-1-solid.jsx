import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdyx5nj8d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tdyx5nj8d"/>`,
		"fallback": "streamline-flex:download-box-1-solid",
	});
}

export default Component;
