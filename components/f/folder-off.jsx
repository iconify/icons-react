import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/h/h445vw.css';
import '../../css/z/zxndow.css';
import '../../css/l/l6j71m.css';
import '../../css/l/lvtybe.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-tnsd9f.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGImJ9abYG"><path class="c5xdmn h445vw zxndow"/><path class="c5xdmn l6j71m zxndow"/><path class="c5xdmn lvtybe oxx-om"/></mask></defs><path mask="url(#SVGImJ9abYG)" class="botfzx"/><path class="c5xdmn gd_4-q lvtybe"/>`,
		"fallback": "line-md:folder-off",
	});
}

export default Component;
