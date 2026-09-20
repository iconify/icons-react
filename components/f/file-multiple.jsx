import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeg8hro-s.css';
import '../../css/b/b7-je_b1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeg8hro-s"/><path class="b7-je_b1l"/>`,
		"fallback": "lineicons:file-multiple",
	});
}

export default Component;
