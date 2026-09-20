import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_lyv3b0l.css';
import '../../css/x/xt5j-ib0w.css';
import '../../css/x/xcetbubdl.css';
import '../../css/f/f31swhbns.css';
import '../../css/r/r483rziiv.css';
import '../../css/p/p1b3y4btk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c_lyv3b0l"/><path class="xt5j-ib0w"/><path class="xcetbubdl"/><path class="f31swhbns"/><path class="r483rziiv"/><path class="p1b3y4btk"/></g>`,
		"fallback": "streamline-cyber-color:bank-notes-stack",
	});
}

export default Component;
