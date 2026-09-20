import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htn-dr4sx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htn-dr4sx"/>`,
		"fallback": "material-icon-theme:email",
	});
}

export default Component;
