import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgddl0bzk.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgddl0bzk"/>`,
		"fallback": "material-icon-theme:code-climate-light",
	});
}

export default Component;
