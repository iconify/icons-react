import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/c/cpgd0k4ly.css';
import '../../css/f/f1q6yubzt.css';
import '../../css/w/wtxazmnlg.css';
import '../../css/v/vh7aklbca.css';
import '../../css/r/r5bk36boc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="cpgd0k4ly"/><path class="f1q6yubzt"/><path class="wtxazmnlg"/><path class="vh7aklbca"/><path class="r5bk36boc"/></g>`,
		"fallback": "streamline-sharp-color:bell-set-timer",
	});
}

export default Component;
