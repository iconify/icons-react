import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_gr6ubgr.css';
import '../../css/g/g77xgdc7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_gr6ubgr"/><path class="g77xgdc7h"/>`,
		"fallback": "eos-icons:data-mining",
	});
}

export default Component;
