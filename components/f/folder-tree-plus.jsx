import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gff683b6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gff683b6p"/>`,
		"fallback": "noviair:folder-tree-plus",
	});
}

export default Component;
