import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qrdomxblq.css';
import '../../css/i/itsuj7bqe.css';
import '../../css/f/f22o3bcfn.css';
import '../../css/o/od5nvabry.css';
import '../../css/q/q9kq7dj7j.css';
import '../../css/w/wvvr-cbnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="qrdomxblq wm-deco"/><path class="itsuj7bqe wm-deco"/><path class="f22o3bcfn wm-deco"/><path class="od5nvabry wm-k"/><path class="q9kq7dj7j wm-a"/><path class="wm-a wvvr-cbnj"/></g>`,
		"fallback": "withicons:avatar-baby-blueprint",
	});
}

export default Component;
