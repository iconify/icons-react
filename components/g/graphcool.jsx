import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-ost6bfw.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-ost6bfw"/>`,
		"fallback": "material-icon-theme:graphcool",
	});
}

export default Component;
