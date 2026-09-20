import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v_aj7yb5h.css';
import '../../css/f/f1zbalb1o.css';
import '../../css/g/ghiiec2vs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v_aj7yb5h"/><rect class="f1zbalb1o"/><rect class="ghiiec2vs"/></g>`,
		"fallback": "lucide:align-vertical-distribute-center",
	});
}

export default Component;
