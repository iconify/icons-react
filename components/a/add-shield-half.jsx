import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj00pl8l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nrj00pl8l"/>`,
		"fallback": "ix:add-shield-half",
	});
}

export default Component;
