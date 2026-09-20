import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7f-2pkdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7f-2pkdw"/>`,
		"fallback": "uit:chart-growth",
	});
}

export default Component;
