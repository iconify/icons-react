import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7tdrk9ta.css';
import '../../css/g/g3yfe1b-l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7tdrk9ta"/><path class="g3yfe1b-l"/>`,
		"fallback": "material-icon-theme:hcl",
	});
}

export default Component;
