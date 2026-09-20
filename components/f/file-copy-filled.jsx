import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg-1y-bay.css';
import '../../css/x/xszw9heki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg-1y-bay"/><path class="xszw9heki"/>`,
		"fallback": "tdesign:file-copy-filled",
	});
}

export default Component;
