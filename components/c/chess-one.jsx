import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mietpubkr.css';
import '../../css/c/cyjpcvmzc.css';
import '../../css/g/guxsfgqhk.css';
import '../../css/y/yoae2u98l.css';
import '../../css/x/xow6asr3s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mietpubkr"/><path class="cyjpcvmzc"/><path class="guxsfgqhk"/><path class="yoae2u98l"/><path class="xow6asr3s"/></g>`,
		"fallback": "icon-park:chess-one",
	});
}

export default Component;
