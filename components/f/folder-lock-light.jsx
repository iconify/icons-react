import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udtztp8ns.css';
import '../../css/w/wc5zi-5ib.css';
import '../../css/n/nlwj_sxhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udtztp8ns"/><path clip-rule="evenodd" class="wc5zi-5ib"/><path clip-rule="evenodd" class="nlwj_sxhn"/>`,
		"fallback": "stash:folder-lock-light",
	});
}

export default Component;
