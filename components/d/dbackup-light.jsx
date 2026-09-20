import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu6kif3au.css';
import '../../css/t/ttjmg5b9p.css';
import '../../css/g/gwclx3y4g.css';
import '../../css/f/fom3xqb7z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu6kif3au"/><path class="ttjmg5b9p"/><path class="gwclx3y4g"/><path class="fom3xqb7z"/>`,
		"fallback": "selfhst:dbackup-light",
	});
}

export default Component;
