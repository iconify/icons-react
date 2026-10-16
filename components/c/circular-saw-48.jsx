import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9pto6bfk.css';
import '../../css/h/hb4ovmb-c.css';
import '../../css/b/betbcgbxb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9pto6bfk"/><path class="hb4ovmb-c"/><path class="betbcgbxb"/>`,
		"fallback": "energy-icons:circular-saw-48",
	});
}

export default Component;
