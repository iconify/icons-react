import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw7lxg0ts.css';
import '../../css/n/n7p431bil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yw7lxg0ts"/><path class="n7p431bil"/>`,
		"fallback": "solar:folder-dot-open-bold",
	});
}

export default Component;
