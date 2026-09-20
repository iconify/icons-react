import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guukbbb1k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="guukbbb1k"/>`,
		"fallback": "ix:connection-local",
	});
}

export default Component;
