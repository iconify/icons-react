import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/ianqjg8al.css';
import '../../css/m/mnsfi978f.css';
import '../../css/l/levawsbjm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ianqjg8al"/><path class="mnsfi978f"/><path class="levawsbjm"/></g>`,
		"fallback": "streamline-plump-color:arrow-curvy-both-direction-2",
	});
}

export default Component;
