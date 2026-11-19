import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xact6hbyl.css';
import '../../css/n/n23ti0b5b.css';
import '../../css/y/yh9bn9bxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xact6hbyl"/><path class="n23ti0b5b"/><path class="yh9bn9bxo"/></g>`,
		"fallback": "andrsrxn:article-search",
	});
}

export default Component;
