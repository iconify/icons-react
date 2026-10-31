import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj2784bhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj2784bhp"/>`,
		"fallback": "withicons:file-x-gloss",
	});
}

export default Component;
