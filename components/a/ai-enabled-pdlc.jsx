import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsnta9bsn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsnta9bsn"/>`,
		"fallback": "carbon:ai-enabled-pdlc",
	});
}

export default Component;
