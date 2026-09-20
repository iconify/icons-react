import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wufuxznrf.css';
import '../../css/e/edxozch4w.css';
import '../../css/y/yisl4cuvc.css';
import '../../css/z/zaa5_hbqn.css';
import '../../css/g/gscnh0qzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wufuxznrf"/><path class="edxozch4w"/><path class="yisl4cuvc"/><path class="zaa5_hbqn"/><path class="gscnh0qzf"/></g>`,
		"fallback": "streamline-ultimate-color:file-css",
	});
}

export default Component;
