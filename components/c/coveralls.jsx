import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amws4-btq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amws4-btq"/>`,
		"fallback": "simple-icons:coveralls",
	});
}

export default Component;
