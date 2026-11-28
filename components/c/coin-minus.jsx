import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvfk_ofog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvfk_ofog"/>`,
		"fallback": "noviair:coin-minus",
	});
}

export default Component;
