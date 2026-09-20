import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf7y1jtyp.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf7y1jtyp"/>`,
		"fallback": "memory:division",
	});
}

export default Component;
