import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-5qdfbve.css';
import '../../css/a/ammtthdlg.css';
import '../../css/b/bd01pac2c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-5qdfbve"/><path class="ammtthdlg"/><path class="bd01pac2c"/>`,
		"fallback": "energy-icons:air-fryer-48",
	});
}

export default Component;
