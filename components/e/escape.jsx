import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn9oscdph.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn9oscdph"/>`,
		"fallback": "f7:escape",
	});
}

export default Component;
