import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pepcxkbtl.css';
import '../../css/b/bkagalxid.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pepcxkbtl"/><path class="bkagalxid"/>`,
		"fallback": "energy-icons:electricity-bill-20",
	});
}

export default Component;
