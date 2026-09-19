import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzesfbb8z.css';
import '../../css/q/qccj0vbum.css';
import '../../css/d/dlp7nstpk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzesfbb8z"/><path class="qccj0vbum"/><circle class="dlp7nstpk"/>`,
		"fallback": "carbon:container-registry",
	});
}

export default Component;
