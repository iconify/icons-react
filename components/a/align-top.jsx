import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fugy1xbzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fugy1xbzw"/>`,
		"fallback": "tdesign:align-top",
	});
}

export default Component;
