import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqc-2tjjs.css';
import '../../css/i/ix9txabgz.css';
import '../../css/o/opf7hobje.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqc-2tjjs"/><path class="ix9txabgz"/><path class="opf7hobje"/>`,
		"fallback": "streamline-pixel:email-envelope-open",
	});
}

export default Component;
