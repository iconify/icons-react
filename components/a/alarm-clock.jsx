import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/ecivqmbcu.css';
import '../../css/o/o9qo_fb4p.css';
import '../../css/q/q4zs90gqi.css';
import '../../css/p/pqcpz8djw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="ecivqmbcu"/><circle class="o9qo_fb4p"/><path class="q4zs90gqi"/><path class="pqcpz8djw"/></g>`,
		"fallback": "proicons:alarm-clock",
	});
}

export default Component;
