import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hensmks1q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hensmks1q"/>`,
		"fallback": "streamline-plump:gameboy-remix",
	});
}

export default Component;
