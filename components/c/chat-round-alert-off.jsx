import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/o/ocdart.css';
import '../../css/z/zxndow.css';
import '../../css/t/ttlnxo.css';
import '../../css/t/t11kpj.css';
import '../../css/i/ixkhpy.css';
import '../../css/o/oxx-om.css';
import '../../css/p/plzspp.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-ssqjbr.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTlR9zcnX"><path class="c5xdmn ocdart zxndow"/><path class="ttlnxo"/><path class="c5xdmn t11kpj zxndow"/><path class="c5xdmn ixkhpy zxndow"/><path class="c5xdmn oxx-om plzspp"/></mask></defs><path mask="url(#SVGTlR9zcnX)" class="botfzx"/><path class="c5xdmn gd_4-q plzspp"/>`,
		"fallback": "line-md:chat-round-alert-off",
	});
}

export default Component;
