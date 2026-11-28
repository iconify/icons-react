import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvrc3e2gv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvrc3e2gv"/>`,
		"fallback": "noviair:film-check",
	});
}

export default Component;
