import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au3304bmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au3304bmw"/>`,
		"fallback": "ci:circle-help",
	});
}

export default Component;
