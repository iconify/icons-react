import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmmo2nbmg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmmo2nbmg"/>`,
		"fallback": "rivet-icons:ellipsis",
	});
}

export default Component;
