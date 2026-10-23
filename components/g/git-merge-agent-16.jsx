import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyuip7b1u.css';
import '../../css/d/d4yg8obpv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyuip7b1u"/><path class="d4yg8obpv"/>`,
		"fallback": "octicon:git-merge-agent-16",
	});
}

export default Component;
