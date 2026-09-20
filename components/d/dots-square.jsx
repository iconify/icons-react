import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzg34bctw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzg34bctw"/>`,
		"fallback": "mdi:dots-square",
	});
}

export default Component;
