import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izferu_zd.css';

const viewBox = {"width":750,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izferu_zd"/>`,
		"fallback": "il:controls",
	});
}

export default Component;
