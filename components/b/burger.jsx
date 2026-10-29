import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih9840bcu.css';
import '../../css/m/m5xps3bmn.css';
import '../../css/e/esduqrofq.css';
import '../../css/w/wgz597bks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih9840bcu wm-k"/><path class="m5xps3bmn wm-a"/><path class="esduqrofq wm-k"/><path class="wgz597bks wm-k"/>`,
		"fallback": "withicons-bauhaus:burger",
	});
}

export default Component;
