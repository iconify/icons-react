import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8q9e4bsf.css';
import '../../css/m/mgi81ojmu.css';
import '../../css/n/nyrfs3b7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8q9e4bsf"/><circle class="mgi81ojmu"/><circle class="nyrfs3b7z"/>`,
		"fallback": "uim:android",
	});
}

export default Component;
