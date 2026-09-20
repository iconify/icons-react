import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2j83rzjf.css';
import '../../css/n/nwxojzbqn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2j83rzjf"/><path class="nwxojzbqn"/>`,
		"fallback": "qlementine-icons:anchor-bottom-middle-16",
	});
}

export default Component;
