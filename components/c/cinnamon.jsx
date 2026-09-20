import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auwvypbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auwvypbfa"/>`,
		"fallback": "thesvg-color:cinnamon",
	});
}

export default Component;
