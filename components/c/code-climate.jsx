import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6nnlgbfv.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6nnlgbfv"/>`,
		"fallback": "material-icon-theme:code-climate",
	});
}

export default Component;
