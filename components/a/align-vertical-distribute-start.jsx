import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f1zbalb1o.css';
import '../../css/g/ghiiec2vs.css';
import '../../css/a/a5s351u-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="f1zbalb1o"/><rect class="ghiiec2vs"/><path class="a5s351u-m"/></g>`,
		"fallback": "lucide:align-vertical-distribute-start",
	});
}

export default Component;
