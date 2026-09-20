import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/l/lew-ud.css';
import '../../css/z/zxndow.css';
import '../../css/l/lufy5p.css';
import '../../css/u/ul8qgd.css';
import '../../css/b/botfzx.css';
import '../../css/h/h3lk2t.css';
import '../../css/s/s8e22g.css';
import '../../css/f/fcgi3h.css';
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
		"content": `<defs><mask id="SVGQ3ZQvbXw"><path class="c5xdmn lew-ud zxndow"/><path class="c5xdmn lufy5p zxndow"/><path class="ul8qgd"/></mask></defs><path mask="url(#SVGQ3ZQvbXw)" class="botfzx"/><path class="c5xdmn h3lk2t s8e22g"/><path class="c5xdmn fcgi3h s8e22g"/>`,
		"fallback": "line-md:email-arrow-up",
	});
}

export default Component;
