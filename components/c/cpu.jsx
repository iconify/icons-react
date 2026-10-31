import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/u15jf1bnz.css';
import '../../css/g/gjs20_qbp.css';
import '../../css/v/vjsd4sbgq.css';
import '../../css/k/kx9parvdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="u15jf1bnz"/><path class="gjs20_qbp wm-shine"/><path class="vjsd4sbgq wm-k"/><path class="kx9parvdn wm-a"/></g>`,
		"fallback": "withicons-kawaii:cpu",
	});
}

export default Component;
