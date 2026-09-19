import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7er9jb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7er9jb5k"/>`,
		"fallback": "cbi:bloom",
	});
}

export default Component;
