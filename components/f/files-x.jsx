import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjdr509bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjdr509bb"/>`,
		"fallback": "noviair-light:files-x",
	});
}

export default Component;
