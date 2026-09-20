import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdlw0w.css';
import '../../css/a/ae_viy.css';
import '../../css/c/c5xdmn.css';
import '../../css/z/zxndow.css';
import '../../css/c/cn_flp.css';
import '../../css/o/oxx-om.css';
import '../../css/p/plzspp.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-from-22.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG689rTcXO"><path class="bdlw0w"/><path class="ae_viy c5xdmn zxndow"/><path class="c5xdmn cn_flp zxndow"/><path class="c5xdmn oxx-om plzspp"/></mask></defs><path mask="url(#SVG689rTcXO)" class="botfzx"/><path class="c5xdmn gd_4-q plzspp"/>`,
		"fallback": "line-md:cloud-off-filled",
	});
}

export default Component;
