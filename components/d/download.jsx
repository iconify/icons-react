import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/giq5sk66w.css';
import '../../css/y/yypjo3b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="giq5sk66w"/><path class="yypjo3b2v"/>`,
		"fallback": "lets-icons:download",
	});
}

export default Component;
