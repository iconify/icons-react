import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi3v-fbxn.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi3v-fbxn"/>`,
		"fallback": "fa:file-text",
	});
}

export default Component;
