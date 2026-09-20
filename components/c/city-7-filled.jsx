import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qagz4lb5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qagz4lb5d"/>`,
		"fallback": "tdesign:city-7-filled",
	});
}

export default Component;
