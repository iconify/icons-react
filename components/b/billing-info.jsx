import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofqcakjlm.css';
import '../../css/l/lr1fnhkrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofqcakjlm"/><path class="lr1fnhkrm"/>`,
		"fallback": "stash:billing-info",
	});
}

export default Component;
