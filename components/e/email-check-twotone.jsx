import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzvvbq.css';
import '../../css/c/c5xdmn.css';
import '../../css/l/lew-ud.css';
import '../../css/z/zxndow.css';
import '../../css/l/lufy5p.css';
import '../../css/j/j2uidj.css';
import '../../css/b/botfzx.css';
import '../../css/d/d51z4a.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-66.css';
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
		"content": `<defs><mask id="SVGWnNn8cuI"><path class="mzvvbq"/><path class="c5xdmn lew-ud zxndow"/><path class="c5xdmn lufy5p zxndow"/><path class="j2uidj"/></mask></defs><path mask="url(#SVGWnNn8cuI)" class="botfzx"/><path class="c5xdmn d51z4a"/>`,
		"fallback": "line-md:email-check-twotone",
	});
}

export default Component;
