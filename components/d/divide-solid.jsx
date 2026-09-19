import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/m/mw7smgb6y.css';
import '../../css/p/pbtl3b4-t.css';
import '../../css/n/nxucm-4mi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="mw7smgb6y"/><path class="pbtl3b4-t"/><path class="nxucm-4mi"/></g>`,
		"fallback": "iconoir:divide-solid",
	});
}

export default Component;
