import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u22x8cbtk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u22x8cbtk"/>`,
		"fallback": "material-icon-theme:citation",
	});
}

export default Component;
