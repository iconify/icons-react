import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o18pi7bhg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o18pi7bhg"/>`,
		"fallback": "codicon:check-compact",
	});
}

export default Component;
