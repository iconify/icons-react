import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qgb5tlpts.css';
import '../../css/a/amun585bq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qgb5tlpts"/><path clip-rule="evenodd" class="amun585bq"/></g>`,
		"fallback": "flowbite:droplet-bottle-alt-solid",
	});
}

export default Component;
