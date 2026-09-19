import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2v_ogb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2v_ogb2g"/>`,
		"fallback": "grommet-icons:globe",
	});
}

export default Component;
