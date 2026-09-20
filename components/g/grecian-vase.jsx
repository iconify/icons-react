import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtz-bdb8n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtz-bdb8n"/>`,
		"fallback": "pinhead:grecian-vase",
	});
}

export default Component;
