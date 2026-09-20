import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx4ddcyzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx4ddcyzv"/>`,
		"fallback": "tdesign:folder-zip-filled",
	});
}

export default Component;
