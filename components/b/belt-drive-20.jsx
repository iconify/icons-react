import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjg5rdbcc.css';
import '../../css/b/bgc6dhdml.css';
import '../../css/n/nbcjn_bcc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjg5rdbcc"/><path class="bgc6dhdml"/><path class="nbcjn_bcc"/>`,
		"fallback": "energy-icons:belt-drive-20",
	});
}

export default Component;
