import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvj5dzbtl.css';
import '../../css/i/inpc4rroq.css';
import '../../css/q/qapg4nbep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvj5dzbtl"/><path class="inpc4rroq"/><path clip-rule="evenodd" class="qapg4nbep"/>`,
		"fallback": "token:fer",
	});
}

export default Component;
