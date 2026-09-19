import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/o/o3gek45nk.css';
import '../../css/b/blkorcccc.css';
import '../../css/u/ucsa-pbxo.css';
import '../../css/y/ybm1p_boy.css';
import '../../css/g/gulq_4b1m.css';
import '../../css/t/tyc5wfjoj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="o3gek45nk"/><path class="blkorcccc"/><path class="ucsa-pbxo"/><path class="ybm1p_boy"/><path class="gulq_4b1m"/><path class="tyc5wfjoj"/></g>`,
		"fallback": "icon-park:full-dress-longuette",
	});
}

export default Component;
