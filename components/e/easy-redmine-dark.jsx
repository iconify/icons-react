import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaw6epbde.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oaw6epbde"/>`,
		"fallback": "selfhst:easy-redmine-dark",
	});
}

export default Component;
