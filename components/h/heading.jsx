import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dckrksbvf.css';
import '../../css/d/dn9oi3j2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dckrksbvf wm-k"/><path class="dn9oi3j2f wm-a"/>`,
		"fallback": "withicons-bauhaus:heading",
	});
}

export default Component;
