import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr8we86-j.css';
import '../../css/r/rpkhy_b3u.css';
import '../../css/h/hsmq3ob6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr8we86-j"/><path class="rpkhy_b3u"/><path class="hsmq3ob6r"/>`,
		"fallback": "streamline-freehand:floppy-disk",
	});
}

export default Component;
