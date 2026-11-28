import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fysymyb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fysymyb0w"/>`,
		"fallback": "noviair:file-clock",
	});
}

export default Component;
