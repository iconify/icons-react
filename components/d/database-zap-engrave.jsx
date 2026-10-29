import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fvkv7bqef.css';
import '../../css/c/c7comr-ql.css';
import '../../css/y/y95393_dl.css';
import '../../css/i/i83y3y1nc.css';
import '../../css/o/o-cyv-b7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fvkv7bqef"/><path class="c7comr-ql wm-shadow"/><path class="y95393_dl"/><path class="i83y3y1nc"/><path class="o-cyv-b7k"/></g>`,
		"fallback": "withicons:database-zap-engrave",
	});
}

export default Component;
