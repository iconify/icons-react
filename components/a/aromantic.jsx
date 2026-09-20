import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj4kgr0on.css';
import '../../css/g/gimv_nida.css';
import '../../css/g/gs_dd3j6j.css';
import '../../css/l/l33uf3b3d.css';
import '../../css/g/g4can7bsj.css';
import '../../css/p/paac-m4si.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wj4kgr0on"><path class="gimv_nida"/><path class="gs_dd3j6j"/><path class="l33uf3b3d"/><path class="g4can7bsj"/><path class="paac-m4si"/></g><path class="qy525jbwx"/>`,
		"fallback": "openmoji:aromantic",
	});
}

export default Component;
