import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq2hqvwyz.css';
import '../../css/b/b9htj9b6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq2hqvwyz"/><path class="b9htj9b6n"/>`,
		"fallback": "solar:folder-output-bold-duotone",
	});
}

export default Component;
