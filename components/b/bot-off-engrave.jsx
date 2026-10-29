import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l6hkv0b8k.css';
import '../../css/b/bnrd1xfao.css';
import '../../css/o/ol-kpp5cg.css';
import '../../css/l/lj5tuy5ut.css';
import '../../css/k/kv8k2xgor.css';
import '../../css/j/j29ih9old.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l6hkv0b8k wm-k"/><path class="bnrd1xfao wm-a"/><path class="ol-kpp5cg wm-s"/><path class="lj5tuy5ut wm-shadow"/><path class="kv8k2xgor wm-k"/><path class="j29ih9old wm-a"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons:bot-off-engrave",
	});
}

export default Component;
