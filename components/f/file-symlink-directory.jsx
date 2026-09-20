import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-xtz-b9x.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-xtz-b9x"/>`,
		"fallback": "octicon:file-symlink-directory",
	});
}

export default Component;
