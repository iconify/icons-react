import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oanyu-b7f.css';
import '../../css/a/aq7lsdb9w.css';
import '../../css/m/mbsy57b8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oanyu-b7f"/><path class="aq7lsdb9w"/><path class="mbsy57b8u"/>`,
		"fallback": "energy-icons:assembly-line-48-bold",
	});
}

export default Component;
