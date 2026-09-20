import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfzl3xbxr.css';
import '../../css/h/hte0qdbfn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfzl3xbxr"/><path class="hte0qdbfn"/>`,
		"fallback": "streamline-pixel:health-drug-medicine-bag-aid-2",
	});
}

export default Component;
