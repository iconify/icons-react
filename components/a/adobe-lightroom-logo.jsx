import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wllkppbaq.css';
import '../../css/g/gamq8xb-i.css';
import '../../css/i/ik78brbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="wllkppbaq"/><path class="gamq8xb-i"/><path class="ik78brbww"/></g>`,
		"fallback": "streamline-logos:adobe-lightroom-logo",
	});
}

export default Component;
