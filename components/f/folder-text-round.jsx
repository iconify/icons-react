import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stetxqbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stetxqbsz"/>`,
		"fallback": "coolicons:folder-text-round",
	});
}

export default Component;
