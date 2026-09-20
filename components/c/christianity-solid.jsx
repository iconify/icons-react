import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb310nboe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb310nboe"/>`,
		"fallback": "streamline:christianity-solid",
	});
}

export default Component;
