import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0ksu7uqw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0ksu7uqw"/>`,
		"fallback": "ix:configuration",
	});
}

export default Component;
