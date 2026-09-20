import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp1ly_bxy.css';
import '../../css/t/tuvamblkg.css';
import '../../css/i/i1958g00u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp1ly_bxy"/><rect class="tuvamblkg"/><path class="i1958g00u"/>`,
		"fallback": "uim:document-layout-right",
	});
}

export default Component;
