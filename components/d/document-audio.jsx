import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxmas2bmc.css';
import '../../css/u/u9olyabjd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxmas2bmc"/><path class="u9olyabjd"/>`,
		"fallback": "carbon:document-audio",
	});
}

export default Component;
