import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/b/b9e3_g_0y.css';
import '../../css/w/w_2k8scaa.css';
import '../../css/d/drs2nmbbd.css';
import '../../css/d/dc3apo90t.css';
import '../../css/q/qbtv5ebjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="b9e3_g_0y"/><path class="w_2k8scaa"/><path class="drs2nmbbd"/><path class="dc3apo90t"/><path class="qbtv5ebjz"/></g>`,
		"fallback": "streamline-logos:backbonejs-logo",
	});
}

export default Component;
