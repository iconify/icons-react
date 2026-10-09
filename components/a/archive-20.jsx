import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p93n1m73s.css';
import '../../css/t/tgao99i9c.css';
import '../../css/q/qg0hzccxf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p93n1m73s"/><path class="tgao99i9c"/><path class="qg0hzccxf"/>`,
		"fallback": "energy-icons:archive-20",
	});
}

export default Component;
