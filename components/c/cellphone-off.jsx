import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/g/gwd63i.css';
import '../../css/u/uedp7a.css';
import '../../css/o/oxx-om.css';
import '../../css/t/tbv09e.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-66.css';
import '../../css/d/d-3crpcp.css';
import '../../css/d/d-70g21a.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvu2hhbjN"><path class="c5xdmn gwd63i"/><path class="uedp7a"/><path class="c5xdmn oxx-om tbv09e"/></mask></defs><path mask="url(#SVGvu2hhbjN)" class="botfzx"/><path class="c5xdmn gd_4-q tbv09e"/>`,
		"fallback": "line-md:cellphone-off",
	});
}

export default Component;
