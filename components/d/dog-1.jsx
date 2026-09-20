import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mv6htvw3g.css';
import '../../css/v/v2gjo2qaq.css';
import '../../css/f/flyy8hb_t.css';
import '../../css/m/mmtf28kzc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="mv6htvw3g"/><path class="v2gjo2qaq"/><path class="flyy8hb_t"/><path class="mmtf28kzc"/></g>`,
		"fallback": "streamline-plump-color:dog-1",
	});
}

export default Component;
