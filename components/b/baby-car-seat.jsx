import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/ec9oh6sok.css';
import '../../css/i/io9bucc4u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="ec9oh6sok"/><path class="io9bucc4u"/></g>`,
		"fallback": "icon-park:baby-car-seat",
	});
}

export default Component;
