import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntpi8xe8d.css';
import '../../css/z/z_klffbqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntpi8xe8d"/><path class="z_klffbqs"/>`,
		"fallback": "tdesign:file-paste-filled",
	});
}

export default Component;
