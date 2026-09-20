import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/ssp6cobkf.css';
import '../../css/l/luxvfacfp.css';
import '../../css/j/jzs00pbkg.css';
import '../../css/b/b88t7xmvt.css';
import '../../css/u/uq0s7-beh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ssp6cobkf"/><path class="luxvfacfp"/><path class="jzs00pbkg"/><path class="b88t7xmvt"/><path class="uq0s7-beh"/></g>`,
		"fallback": "streamline-ultimate-color:file-html",
	});
}

export default Component;
