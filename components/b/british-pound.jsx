import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otoqyqb2k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otoqyqb2k"/>`,
		"fallback": "icons8:british-pound",
	});
}

export default Component;
