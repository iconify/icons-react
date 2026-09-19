import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sffbs1avt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sffbs1avt"/>`,
		"fallback": "dinkie-icons:east-wind-mahjong",
	});
}

export default Component;
