import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs4ufqbdt.css';
import '../../css/d/dlp7nstpk.css';
import '../../css/x/xxi4ldb4o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs4ufqbdt"/><circle class="dlp7nstpk"/><path class="xxi4ldb4o"/>`,
		"fallback": "carbon:block-storage-alt",
	});
}

export default Component;
