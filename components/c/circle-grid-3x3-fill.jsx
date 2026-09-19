import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcu0spkpj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcu0spkpj"/>`,
		"fallback": "f7:circle-grid-3x3-fill",
	});
}

export default Component;
