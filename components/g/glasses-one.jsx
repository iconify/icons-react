import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/q4tnseqel.css';
import '../../css/f/fm6catbms.css';
import '../../css/y/yngjwbcke.css';
import '../../css/v/vydv_p53t.css';
import '../../css/o/o6jqt2bpm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><circle class="q4tnseqel"/><circle transform="matrix(-1 0 0 1 33.5 24.5)" class="fm6catbms"/><path class="yngjwbcke"/><path class="vydv_p53t"/><path class="o6jqt2bpm"/></g>`,
		"fallback": "icon-park:glasses-one",
	});
}

export default Component;
