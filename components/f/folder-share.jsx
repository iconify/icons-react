import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9n8z28mx.css';
import '../../css/p/pab997bkl.css';
import '../../css/i/iko852rpv.css';
import '../../css/x/x8jj69bzq.css';
import '../../css/l/lizpewbxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k9n8z28mx"/><path class="pab997bkl"/><path class="iko852rpv"/><path class="x8jj69bzq"/><path class="lizpewbxs"/></g>`,
		"fallback": "streamline-ultimate-color:folder-share",
	});
}

export default Component;
