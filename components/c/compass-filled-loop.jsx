import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le7jai.css';
import '../../css/t/tnl9ea.css';
import '../../css/l/lsejuv.css';
import '../../css/y/ydovum.css';
import '../../css/l/lb6slu.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-tcc6vx.css';
import '../../css/d/d-67r94s.css';
import '../../css/t/tr--s0y2h.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-1px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIEMkucgB"><path class="le7jai"/><path class="tnl9ea"/></mask></defs><path mask="url(#SVGIEMkucgB)" class="lsejuv ydovum"/><circle class="lb6slu ydovum"/>`,
		"fallback": "line-md:compass-filled-loop",
	});
}

export default Component;
