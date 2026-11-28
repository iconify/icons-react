import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf146z00y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf146z00y"/>`,
		"fallback": "noviair-light:file-arrow-up",
	});
}

export default Component;
