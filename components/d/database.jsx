import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/q/qg9w3n3bs.css';
import '../../css/s/s8127tbcg.css';
import '../../css/k/k76zracww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="qg9w3n3bs"/><ellipse class="s8127tbcg"/><path class="k76zracww"/></g>`,
		"fallback": "humbleicons:database",
	});
}

export default Component;
