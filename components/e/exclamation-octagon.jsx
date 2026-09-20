import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt6x9_b7p.css';
import '../../css/i/iu35e1xme.css';
import '../../css/w/wa-7pugao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt6x9_b7p"/><circle class="iu35e1xme"/><path class="wa-7pugao"/>`,
		"fallback": "uim:exclamation-octagon",
	});
}

export default Component;
