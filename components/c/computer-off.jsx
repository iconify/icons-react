import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/f/fuzxbl.css';
import '../../css/z/zxndow.css';
import '../../css/r/rpw8kq.css';
import '../../css/c/cm1sdh.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-8.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbYp2TbsP"><path class="c5xdmn fuzxbl zxndow"/><path class="c5xdmn rpw8kq zxndow"/><path class="c5xdmn cm1sdh oxx-om"/></mask></defs><path mask="url(#SVGbYp2TbsP)" class="botfzx"/><path class="c5xdmn cm1sdh gd_4-q"/>`,
		"fallback": "line-md:computer-off",
	});
}

export default Component;
