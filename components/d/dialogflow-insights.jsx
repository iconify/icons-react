import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ohm435bso.css';
import '../../css/o/oorsanbvf.css';
import '../../css/l/le9kjkvqq.css';
import '../../css/l/lnv51_btx.css';
import '../../css/o/odikd2brz.css';
import '../../css/k/kvzy8wbjh.css';
import '../../css/l/lle4zh-ia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="ohm435bso"/><path class="oorsanbvf"/><path class="le9kjkvqq"/><path class="lnv51_btx"/><path class="odikd2brz"/><path class="kvzy8wbjh"/><path class="lle4zh-ia"/></g>`,
		"fallback": "gcp:dialogflow-insights",
	});
}

export default Component;
