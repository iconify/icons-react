import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0kaybcym.css';
import '../../css/l/l1wpyo1fg.css';
import '../../css/c/ciy1dsjbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0kaybcym"/><circle class="l1wpyo1fg"/><path class="ciy1dsjbn"/>`,
		"fallback": "typcn:business-card",
	});
}

export default Component;
