import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spw8_85nj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spw8_85nj"/>`,
		"fallback": "streamline-block:control-buttons-fast-forward",
	});
}

export default Component;
