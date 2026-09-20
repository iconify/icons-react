import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u03gbh6os.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u03gbh6os"/>`,
		"fallback": "uit:align-right",
	});
}

export default Component;
