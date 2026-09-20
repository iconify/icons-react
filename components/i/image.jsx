import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bekoxbt4z.css';
import '../../css/v/vx50m9b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="bekoxbt4z"/><path class="vx50m9b9j"/>`,
		"fallback": "typcn:image",
	});
}

export default Component;
