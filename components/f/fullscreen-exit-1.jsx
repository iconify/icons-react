import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x06o34gcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x06o34gcw"/>`,
		"fallback": "tdesign:fullscreen-exit-1",
	});
}

export default Component;
