import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/q/qy-3zgbds.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lk08wyuco.css';
import '../../css/x/xglklabzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGvXiKzcvd" class="n1mjunbsu"><path class="qy-3zgbds"/></mask><g class="h01tyzbfu"><path mask="url(#SVGvXiKzcvd)" class="lk08wyuco"/><circle class="xglklabzt"/></g>`,
		"fallback": "lets-icons:compass-light",
	});
}

export default Component;
