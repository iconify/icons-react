import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kar4sbb0l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kar4sbb0l"/>`,
		"fallback": "ix:frames",
	});
}

export default Component;
