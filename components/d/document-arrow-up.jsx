import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crmtgis9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crmtgis9p"/>`,
		"fallback": "heroicons-outline:document-arrow-up",
	});
}

export default Component;
