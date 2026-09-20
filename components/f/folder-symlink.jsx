import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/utu_o_b1a.css';
import '../../css/h/hh8n-9avm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="utu_o_b1a"/><path class="hh8n-9avm"/></g>`,
		"fallback": "lucide:folder-symlink",
	});
}

export default Component;
