import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azr-0u.css';
import '../../css/c/c5xdmn.css';
import '../../css/z/zxndow.css';
import '../../css/l/li54_l.css';
import '../../css/o/ox-j0o.css';
import '../../css/b/botfzx.css';
import '../../css/n/nc16zg.css';
import '../../css/s/s8e22g.css';
import '../../css/d/d-p28s.css';
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
		"content": `<defs><mask id="SVGoyVLJc3P"><path class="azr-0u c5xdmn zxndow"/><path class="c5xdmn li54_l zxndow"/><path class="ox-j0o"/></mask></defs><path mask="url(#SVGoyVLJc3P)" class="botfzx"/><path class="c5xdmn nc16zg s8e22g"/><path class="c5xdmn d-p28s s8e22g"/>`,
		"fallback": "line-md:briefcase-cancel",
	});
}

export default Component;
