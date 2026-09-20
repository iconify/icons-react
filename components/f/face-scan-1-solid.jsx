import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vopa7kdbj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vopa7kdbj"/>`,
		"fallback": "streamline-flex:face-scan-1-solid",
	});
}

export default Component;
