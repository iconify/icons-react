import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0ih3db_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0ih3db_f"/>`,
		"fallback": "withicons:bell-gloss",
	});
}

export default Component;
