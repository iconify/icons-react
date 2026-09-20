import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/z/ziuixobqp.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/n46l4h2nc.css';
import '../../css/a/a6z4ynb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGu1g5bcyb" class="n1mjunbsu"><path class="ziuixobqp"/></mask><g class="h01tyzbfu"><path mask="url(#SVGu1g5bcyb)" class="n46l4h2nc"/><circle class="a6z4ynb6v"/></g>`,
		"fallback": "lets-icons:compass",
	});
}

export default Component;
