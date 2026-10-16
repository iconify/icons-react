import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwb0facpd.css';
import '../../css/x/x5goyhbiu.css';
import '../../css/t/tqvccub8k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwb0facpd"/><path class="x5goyhbiu"/><path class="tqvccub8k"/>`,
		"fallback": "energy-icons:folder-output-20",
	});
}

export default Component;
