import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnnnaqbfs.css';

const viewBox = {"width":767,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnnnaqbfs"/>`,
		"fallback": "whh:ajax",
	});
}

export default Component;
