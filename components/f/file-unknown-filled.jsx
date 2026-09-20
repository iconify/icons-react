import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aniu8tw4w.css';
import '../../css/c/cq-gv4s2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aniu8tw4w"/><path class="cq-gv4s2q"/>`,
		"fallback": "tdesign:file-unknown-filled",
	});
}

export default Component;
