import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bqiva3mde.css';
import '../../css/t/tyglikp4u.css';
import '../../css/x/xgv63sb1f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bqiva3mde"/><path class="tyglikp4u"/><path class="xgv63sb1f"/></g>`,
		"fallback": "streamline-color:desktop-game-flat",
	});
}

export default Component;
