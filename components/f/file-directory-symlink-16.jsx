import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdcn49b2p.css';
import '../../css/z/ze_2m6b8h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdcn49b2p"/><path class="ze_2m6b8h"/>`,
		"fallback": "octicon:file-directory-symlink-16",
	});
}

export default Component;
