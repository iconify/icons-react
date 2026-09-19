import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6nt_usom.css';
import '../../css/l/lfbnv8wtq.css';
import '../../css/b/bh5vgerfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="e6nt_usom"/><rect class="lfbnv8wtq"/><rect class="bh5vgerfv"/>`,
		"fallback": "boxicons:columns-3-filled",
	});
}

export default Component;
