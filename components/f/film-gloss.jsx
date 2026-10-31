import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u01oaubiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u01oaubiw"/>`,
		"fallback": "withicons:film-gloss",
	});
}

export default Component;
