import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enwlp0z_q.css';
import '../../css/m/mz6j3r8mu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enwlp0z_q"/><path class="mz6j3r8mu"/>`,
		"fallback": "tdesign:file-powerpoint-filled",
	});
}

export default Component;
