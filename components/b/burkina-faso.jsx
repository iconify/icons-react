import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx_xvr4ug.css';
import '../../css/y/y70x02bra.css';
import '../../css/l/lmzttacpx.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx_xvr4ug"/><path class="y70x02bra"/><path class="lmzttacpx"/>`,
		"fallback": "tabler-flags:burkina-faso",
	});
}

export default Component;
