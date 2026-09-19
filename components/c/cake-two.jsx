import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/i/ih_4ne4_y.css';
import '../../css/v/v8blxvper.css';
import '../../css/t/tjvl0_bwk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="ih_4ne4_y"/><path class="v8blxvper"/><path class="tjvl0_bwk"/></g>`,
		"fallback": "icon-park:cake-two",
	});
}

export default Component;
