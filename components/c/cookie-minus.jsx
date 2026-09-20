import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/v/vums4r.css';
import '../../css/g/g26hbu.css';
import '../../css/u/u6fdno.css';
import '../../css/l/lx2oxu.css';
import '../../css/g/gq-uqf.css';
import '../../css/d/djbuks.css';
import '../../css/t/th60ya.css';
import '../../css/p/p1sxmm.css';
import '../../css/b/botfzx.css';
import '../../css/u/ukn0gi.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fade-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGA3O50HBc"><path class="c5xdmn vums4r"/><circle class="g26hbu u6fdno"/><circle class="g26hbu lx2oxu"/><circle class="g26hbu gq-uqf"/><circle class="djbuks g26hbu"/><circle class="g26hbu th60ya"/><path class="p1sxmm"/></mask></defs><path mask="url(#SVGA3O50HBc)" class="botfzx"/><path class="c5xdmn ukn0gi"/>`,
		"fallback": "line-md:cookie-minus",
	});
}

export default Component;
