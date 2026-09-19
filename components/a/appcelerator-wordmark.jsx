import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x196-gi3w.css';
import '../../css/a/a04-1rvkl.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x196-gi3w"/><path class="a04-1rvkl"/>`,
		"fallback": "devicon:appcelerator-wordmark",
	});
}

export default Component;
