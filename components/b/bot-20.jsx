import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_7m__7bi.css';
import '../../css/e/er5teobrz.css';
import '../../css/l/lmc5jxf9q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_7m__7bi"/><path class="er5teobrz"/><path class="lmc5jxf9q"/>`,
		"fallback": "energy-icons:bot-20",
	});
}

export default Component;
