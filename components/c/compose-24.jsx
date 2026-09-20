import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9id3us9x.css';
import '../../css/g/gd_h2kbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9id3us9x"/><path class="gd_h2kbvu"/>`,
		"fallback": "octicon:compose-24",
	});
}

export default Component;
