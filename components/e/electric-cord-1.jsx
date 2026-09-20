import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/nqbn7tbjw.css';
import '../../css/f/fbx9uybiy.css';
import '../../css/i/i0ge2abvs.css';
import '../../css/m/mm144gy7y.css';
import '../../css/u/urza5ab2x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="nqbn7tbjw"/><path class="fbx9uybiy"/><path class="i0ge2abvs"/><path class="mm144gy7y"/><path class="urza5ab2x"/></g>`,
		"fallback": "streamline-plump-color:electric-cord-1",
	});
}

export default Component;
