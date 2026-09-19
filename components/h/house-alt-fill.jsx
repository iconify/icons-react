import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usx9ajksc.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usx9ajksc"/>`,
		"fallback": "f7:house-alt-fill",
	});
}

export default Component;
