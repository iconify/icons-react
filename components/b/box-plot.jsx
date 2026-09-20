import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz1ljccmi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sz1ljccmi"/>`,
		"fallback": "ix:box-plot",
	});
}

export default Component;
