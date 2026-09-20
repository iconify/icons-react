import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd35uf49z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd35uf49z"/>`,
		"fallback": "streamline-block:control-buttons-skip-back",
	});
}

export default Component;
