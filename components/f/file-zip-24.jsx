import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqg7_db4w.css';
import '../../css/f/frhmf7-sb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqg7_db4w"/><path class="frhmf7-sb"/>`,
		"fallback": "octicon:file-zip-24",
	});
}

export default Component;
