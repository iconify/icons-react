import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s2oxpgbex.css';
import '../../css/b/bb_jlzu1v.css';
import '../../css/y/y18yo0fkw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s2oxpgbex"/><path class="bb_jlzu1v"/><path class="y18yo0fkw"/></g>`,
		"fallback": "streamline-flex-color:ball",
	});
}

export default Component;
