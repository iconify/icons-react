import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxen12e3x.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxen12e3x"/>`,
		"fallback": "jam:folder-zip",
	});
}

export default Component;
