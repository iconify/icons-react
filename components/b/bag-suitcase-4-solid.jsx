import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdakjyb5j.css';
import '../../css/f/f090v4_9j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vdakjyb5j"/><path class="f090v4_9j"/>`,
		"fallback": "streamline-plump:bag-suitcase-4-solid",
	});
}

export default Component;
