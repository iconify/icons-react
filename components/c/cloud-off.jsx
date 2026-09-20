import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae_viy.css';
import '../../css/c/c5xdmn.css';
import '../../css/z/zxndow.css';
import '../../css/c/cn_flp.css';
import '../../css/o/oxx-om.css';
import '../../css/t/tbv09e.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
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
		"content": `<defs><mask id="SVGwq4XFnxR"><path class="ae_viy c5xdmn zxndow"/><path class="c5xdmn cn_flp zxndow"/><path class="c5xdmn oxx-om tbv09e"/></mask></defs><path mask="url(#SVGwq4XFnxR)" class="botfzx"/><path class="c5xdmn gd_4-q tbv09e"/>`,
		"fallback": "line-md:cloud-off",
	});
}

export default Component;
