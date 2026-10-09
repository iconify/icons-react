import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_dl1lbbt.css';
import '../../css/k/kl4vydy4t.css';
import '../../css/h/hvu8zoiwe.css';
import '../../css/x/x1_67lb9r.css';
import '../../css/c/csz57tbto.css';
import '../../css/p/pe3ue6qwd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_dl1lbbt"/><path class="kl4vydy4t"/><path class="hvu8zoiwe"/><path class="x1_67lb9r"/><path class="csz57tbto"/><path class="pe3ue6qwd"/>`,
		"fallback": "energy-icons:heatmap-20-bold",
	});
}

export default Component;
