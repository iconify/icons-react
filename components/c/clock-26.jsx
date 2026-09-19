import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vly9au3wd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vly9au3wd"/>`,
		"fallback": "garden:clock-26",
	});
}

export default Component;
