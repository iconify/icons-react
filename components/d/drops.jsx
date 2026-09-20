import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njf56ro9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="njf56ro9f"/>`,
		"fallback": "reicon:drops",
	});
}

export default Component;
