import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abchlonce.css';
import '../../css/q/qmetfmbtm.css';
import '../../css/g/gia1eubje.css';
import '../../css/e/e2y3avbgr.css';
import '../../css/x/x848z0w7x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abchlonce"/><path class="qmetfmbtm"/><path class="gia1eubje"/><path class="e2y3avbgr"/><path class="x848z0w7x"/>`,
		"fallback": "energy-icons:drone-20",
	});
}

export default Component;
