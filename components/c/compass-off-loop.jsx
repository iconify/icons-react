import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/h/hb71qu.css';
import '../../css/c/cqe7mx.css';
import '../../css/c/cwy86a.css';
import '../../css/g/gvraiw.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-60.css';
import '../../css/d/d-tcc6vx.css';
import '../../css/d/d-67r94s.css';
import '../../css/t/tr--s0y2h.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-1px.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBmAVAckz"><path class="c5xdmn hb71qu"/><path class="cqe7mx"/><circle class="cwy86a"/><path class="c5xdmn gvraiw oxx-om"/></mask></defs><path mask="url(#SVGBmAVAckz)" class="botfzx"/><path class="c5xdmn gd_4-q gvraiw"/>`,
		"fallback": "line-md:compass-off-loop",
	});
}

export default Component;
