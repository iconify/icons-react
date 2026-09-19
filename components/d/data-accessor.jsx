import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs4ufqbdt.css';
import '../../css/d/dlp7nstpk.css';
import '../../css/x/x2k2a8bfr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs4ufqbdt"/><circle class="dlp7nstpk"/><path class="x2k2a8bfr"/>`,
		"fallback": "carbon:data-accessor",
	});
}

export default Component;
