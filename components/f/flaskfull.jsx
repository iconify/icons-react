import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs_o25eyy.css';

const viewBox = {"width":1026,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs_o25eyy"/>`,
		"fallback": "whh:flaskfull",
	});
}

export default Component;
