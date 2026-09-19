import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv2isybhk.css';

const viewBox = {"width":717,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv2isybhk"/>`,
		"fallback": "ls:image",
	});
}

export default Component;
