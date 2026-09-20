import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixcjz-wtv.css';
import '../../css/u/uhf9ggjia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixcjz-wtv"/><path class="uhf9ggjia"/>`,
		"fallback": "streamline-ultimate:fruit-apricot-bold",
	});
}

export default Component;
