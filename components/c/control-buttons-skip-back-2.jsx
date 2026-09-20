import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf60akhnx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sf60akhnx"/>`,
		"fallback": "streamline-block:control-buttons-skip-back-2",
	});
}

export default Component;
