import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azr-0u.css';
import '../../css/c/c5xdmn.css';
import '../../css/z/zxndow.css';
import '../../css/l/li54_l.css';
import '../../css/q/q3i0tq.css';
import '../../css/b/botfzx.css';
import '../../css/j/j87cru.css';
import '../../css/s/so-from-64.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNdV4h58P"><path class="azr-0u c5xdmn zxndow"/><path class="c5xdmn li54_l zxndow"/><path class="q3i0tq"/></mask></defs><path mask="url(#SVGNdV4h58P)" class="botfzx"/><path class="c5xdmn j87cru"/>`,
		"fallback": "line-md:briefcase-minus",
	});
}

export default Component;
