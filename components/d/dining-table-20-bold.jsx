import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga3wfsbxu.css';
import '../../css/e/evnvwebdx.css';
import '../../css/p/phqadmx9n.css';
import '../../css/e/ewqgmpbxn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga3wfsbxu"/><path class="evnvwebdx"/><path class="phqadmx9n"/><path class="ewqgmpbxn"/>`,
		"fallback": "energy-icons:dining-table-20-bold",
	});
}

export default Component;
