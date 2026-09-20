import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa96fi7lp.css';
import '../../css/a/am1t0tb4t.css';
import '../../css/n/nfszf7bnc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa96fi7lp"/><path class="am1t0tb4t"/><path clip-rule="evenodd" class="nfszf7bnc"/>`,
		"fallback": "streamline-plump:floppy-disk-solid",
	});
}

export default Component;
