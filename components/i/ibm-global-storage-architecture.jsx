import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poga9shhg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poga9shhg"/>`,
		"fallback": "carbon:ibm-global-storage-architecture",
	});
}

export default Component;
