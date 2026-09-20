import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3gebbbqf.css';
import '../../css/c/cipl_2bab.css';
import '../../css/r/r5j0fgdnc.css';
import '../../css/w/wslm_vb9c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="d3gebbbqf"/><path class="cipl_2bab"/><ellipse class="r5j0fgdnc"/><path class="wslm_vb9c"/>`,
		"fallback": "nimbus:browser",
	});
}

export default Component;
