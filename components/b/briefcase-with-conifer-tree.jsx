import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srlffk1ha.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srlffk1ha"/>`,
		"fallback": "pinhead:briefcase-with-conifer-tree",
	});
}

export default Component;
