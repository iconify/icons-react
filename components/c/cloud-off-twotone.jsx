import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oncedd.css';
import '../../css/a/ae_viy.css';
import '../../css/c/c5xdmn.css';
import '../../css/z/zxndow.css';
import '../../css/c/cn_flp.css';
import '../../css/l/l1irms.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
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
		"content": `<defs><mask id="SVGjDFgFeCP"><path class="oncedd"/><path class="ae_viy c5xdmn zxndow"/><path class="c5xdmn cn_flp zxndow"/><path class="c5xdmn l1irms oxx-om"/></mask></defs><path mask="url(#SVGjDFgFeCP)" class="botfzx"/><path class="c5xdmn gd_4-q l1irms"/>`,
		"fallback": "line-md:cloud-off-twotone",
	});
}

export default Component;
