import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l6vg7guvl.css';
import '../../css/r/ri6ar4dao.css';
import '../../css/f/f0grr5beu.css';
import '../../css/n/nkpijo68q.css';
import '../../css/g/g67kc908k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l6vg7guvl"/><path class="ri6ar4dao"/><path class="f0grr5beu"/><path class="nkpijo68q"/><path class="g67kc908k"/></g>`,
		"fallback": "streamline-ultimate-color:audio-file",
	});
}

export default Component;
