import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq3ziibii.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq3ziibii"/>`,
		"fallback": "wi:direction-down-left",
	});
}

export default Component;
