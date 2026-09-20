import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhmm7i-2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhmm7i-2f"/>`,
		"fallback": "thesvg-color:abbott",
	});
}

export default Component;
