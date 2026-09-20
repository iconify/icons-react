import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-mrcre1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-mrcre1p"/>`,
		"fallback": "tdesign:catalog-1",
	});
}

export default Component;
