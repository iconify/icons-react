import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpvnfjbpj.css';
import '../../css/a/a5arprq4h.css';
import '../../css/s/s88afubvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpvnfjbpj"/><path class="a5arprq4h"/><path class="s88afubvr"/>`,
		"fallback": "streamline-freehand:content-write",
	});
}

export default Component;
