import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jain414ui.css';
import '../../css/r/r_0d81uyp.css';
import '../../css/y/yxum4bbmw.css';
import '../../css/k/k1uq304yb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGoqDEZcaz"><g class="ft5dv1b6b"><rect transform="rotate(-90 14 44)" class="jain414ui"/><path class="r_0d81uyp"/><path class="yxum4bbmw"/><circle transform="matrix(0 -1 -1 0 24 34)" class="k1uq304yb"/></g></mask></defs><path mask="url(#SVGoqDEZcaz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:battery-tips",
	});
}

export default Component;
