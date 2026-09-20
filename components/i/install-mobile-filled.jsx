import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1629e8zl.css';
import '../../css/n/npbkqyb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1629e8zl"/><path class="npbkqyb3w"/>`,
		"fallback": "tdesign:install-mobile-filled",
	});
}

export default Component;
