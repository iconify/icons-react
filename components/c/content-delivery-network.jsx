import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh5bazbdh.css';
import '../../css/t/t_f65iten.css';
import '../../css/f/faheoc_mo.css';
import '../../css/d/dw8g4-vla.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="uh5bazbdh"/><circle class="t_f65iten"/><path class="faheoc_mo"/><path class="dw8g4-vla"/>`,
		"fallback": "carbon:content-delivery-network",
	});
}

export default Component;
