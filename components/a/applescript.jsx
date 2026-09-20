import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8dhdabqw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8dhdabqw"/>`,
		"fallback": "material-icon-theme:applescript",
	});
}

export default Component;
