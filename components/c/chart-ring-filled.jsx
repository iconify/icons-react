import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/murc87bcv.css';
import '../../css/x/x0gfa0b7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="murc87bcv"/><path class="x0gfa0b7z"/>`,
		"fallback": "tdesign:chart-ring-filled",
	});
}

export default Component;
