import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iudi4hfwd.css';
import '../../css/l/l8rtx08ws.css';
import '../../css/k/k-4btpb0e.css';

const viewBox = {"width":1000,"height":1000.005};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iudi4hfwd"/><path class="l8rtx08ws"/><path class="k-4btpb0e"/>`,
		"fallback": "thesvg-color:cnn-international",
	});
}

export default Component;
