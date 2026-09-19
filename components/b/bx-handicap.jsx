import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue0_fhfrg.css';
import '../../css/k/k794i539p.css';
import '../../css/p/p1ohgkcui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ue0_fhfrg"/><path class="k794i539p"/><path class="p1ohgkcui"/>`,
		"fallback": "bx:bx-handicap",
	});
}

export default Component;
