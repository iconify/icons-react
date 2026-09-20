import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6hckm4-n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6hckm4-n"/>`,
		"fallback": "selfhst:filezilla-light",
	});
}

export default Component;
