import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjp3v608l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjp3v608l"/>`,
		"fallback": "thesvg:cultura",
	});
}

export default Component;
