import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tbgw5u1he.css';
import '../../css/i/iykzcgk0d.css';
import '../../css/l/lp6b3cblm.css';
import '../../css/z/zjzi7i56i.css';
import '../../css/i/idjyk3o-r.css';
import '../../css/y/yydcu3--i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="tbgw5u1he"/><rect class="iykzcgk0d"/><path class="lp6b3cblm"/><rect class="zjzi7i56i"/><path class="idjyk3o-r"/><rect class="yydcu3--i"/></g>`,
		"fallback": "lucide-lab:bee-hive",
	});
}

export default Component;
