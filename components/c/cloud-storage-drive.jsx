import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t800yyb2z.css';
import '../../css/e/e7w46bv7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t800yyb2z"/><path class="e7w46bv7o"/>`,
		"fallback": "streamline-freehand:cloud-storage-drive",
	});
}

export default Component;
