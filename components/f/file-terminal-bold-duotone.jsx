import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj6gwrmjs.css';
import '../../css/f/ffwd6obzr.css';
import '../../css/o/o0qlb2nqx.css';
import '../../css/q/q2ycdab-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oj6gwrmjs"/><path class="ffwd6obzr"/><path class="o0qlb2nqx"/><path class="q2ycdab-h"/>`,
		"fallback": "solar:file-terminal-bold-duotone",
	});
}

export default Component;
