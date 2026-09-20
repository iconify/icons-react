import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/s/sa6ysrbbg.css';
import '../../css/x/x2qezhqsd.css';
import '../../css/g/gcdoqrbke.css';
import '../../css/l/l_n65lnlb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="sa6ysrbbg"/><path class="x2qezhqsd"/><path class="gcdoqrbke"/><path class="l_n65lnlb"/></g>`,
		"fallback": "streamline-logos:google-news-logo",
	});
}

export default Component;
