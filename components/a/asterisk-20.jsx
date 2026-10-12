import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esa02sbkm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esa02sbkm"/>`,
		"fallback": "garden:asterisk-20",
	});
}

export default Component;
