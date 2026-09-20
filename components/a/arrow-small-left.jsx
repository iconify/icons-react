import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubn55kbyl.css';

const viewBox = {"width":6,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubn55kbyl"/>`,
		"fallback": "octicon:arrow-small-left",
	});
}

export default Component;
