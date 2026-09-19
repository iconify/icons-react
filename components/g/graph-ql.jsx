import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhb3vsb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhb3vsb8t"/>`,
		"fallback": "grommet-icons:graph-ql",
	});
}

export default Component;
