import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xendcgwaw.css';
import '../../css/x/xg4x14bqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xendcgwaw"/><path class="xg4x14bqu"/>`,
		"fallback": "uim:arrow-up-left",
	});
}

export default Component;
