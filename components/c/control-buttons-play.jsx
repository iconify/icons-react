import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_35acbma.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_35acbma"/>`,
		"fallback": "streamline-block:control-buttons-play",
	});
}

export default Component;
