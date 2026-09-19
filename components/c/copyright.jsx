import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvekuabrc.css';
import '../../css/x/xgnuwrb2c.css';
import '../../css/t/tp3qt_bsr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="mvekuabrc"/><path class="xgnuwrb2c"/><path class="tp3qt_bsr"/></g>`,
		"fallback": "icon-park:copyright",
	});
}

export default Component;
