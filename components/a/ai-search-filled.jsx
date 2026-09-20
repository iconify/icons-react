import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpf5-09ok.css';
import '../../css/h/hpmvmqb-z.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpf5-09ok"/><path class="hpmvmqb-z"/>`,
		"fallback": "tdesign:ai-search-filled",
	});
}

export default Component;
