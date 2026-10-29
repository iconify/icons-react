import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujebgvbxe.css';
import '../../css/o/o967iacib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujebgvbxe wm-a"/><path class="o967iacib wm-k"/>`,
		"fallback": "withicons-bauhaus:check-check",
	});
}

export default Component;
