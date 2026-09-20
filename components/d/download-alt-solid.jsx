import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra69dbbfc.css';
import '../../css/u/u0vmqablo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra69dbbfc"/><path class="u0vmqablo"/>`,
		"fallback": "pixel:download-alt-solid",
	});
}

export default Component;
