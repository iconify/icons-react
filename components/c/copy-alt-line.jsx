import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba495nb3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba495nb3r"/>`,
		"fallback": "si:copy-alt-line",
	});
}

export default Component;
