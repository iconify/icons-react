import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auljhabfb.css';
import '../../css/z/zqdkcibks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auljhabfb"/><path class="zqdkcibks"/>`,
		"fallback": "octicon:file-directory-symlink-24",
	});
}

export default Component;
