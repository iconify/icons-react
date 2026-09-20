import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aicwpsb6t.css';
import '../../css/z/zq5fh9b-i.css';
import '../../css/i/i1958g00u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aicwpsb6t"/><rect class="zq5fh9b-i"/><path class="i1958g00u"/>`,
		"fallback": "uim:document-layout-center",
	});
}

export default Component;
