import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/peoad9soa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="peoad9soa"/>`,
		"fallback": "noviair:file-lock",
	});
}

export default Component;
