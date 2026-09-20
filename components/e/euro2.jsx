import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y75uyol0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y75uyol0b"/>`,
		"fallback": "reicon:euro2",
	});
}

export default Component;
