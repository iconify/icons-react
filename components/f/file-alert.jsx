import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfnt_40zi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfnt_40zi"/>`,
		"fallback": "noviair:file-alert",
	});
}

export default Component;
