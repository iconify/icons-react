import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5ttyznve.css';
import '../../css/p/pop-4ibyu.css';
import '../../css/l/lblbz0brb.css';
import '../../css/l/lwuim0c1j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="f5ttyznve"/><path transform="matrix(.3911 0 0 .39765 1.107 8.405)" class="pop-4ibyu"/><path transform="matrix(.39109 0 0 .39152 5.183 8.371)" class="lblbz0brb"/><path transform="matrix(.39109 0 0 .39152 9.085 8.358)" class="lwuim0c1j"/>`,
		"fallback": "catppuccin:autohotkey",
	});
}

export default Component;
