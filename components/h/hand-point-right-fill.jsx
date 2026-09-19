import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8dkqkb6f.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8dkqkb6f"/>`,
		"fallback": "f7:hand-point-right-fill",
	});
}

export default Component;
