import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in1roj-3j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="in1roj-3j"/>`,
		"fallback": "streamline-plump:cao-dai-remix",
	});
}

export default Component;
