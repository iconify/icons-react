import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqqmgdcri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqqmgdcri"/>`,
		"fallback": "reicon:export2",
	});
}

export default Component;
