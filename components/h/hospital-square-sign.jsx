import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g94-_8blp.css';
import '../../css/n/n7f03-b9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g94-_8blp"/><path class="n7f03-b9g"/>`,
		"fallback": "uim:hospital-square-sign",
	});
}

export default Component;
