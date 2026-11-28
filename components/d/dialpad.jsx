import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u-lt0cbgz.css';
import '../../css/d/dmscnym_a.css';
import '../../css/x/xsv91ibbi.css';
import '../../css/v/v3ew2xbez.css';
import '../../css/d/dvw9nibja.css';
import '../../css/f/fjp7zc-rc.css';
import '../../css/l/l_-1mhb1b.css';
import '../../css/f/fdf1_4bgh.css';
import '../../css/w/wvvwrwb5i.css';
import '../../css/d/dmmio8bme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="u-lt0cbgz"/><path class="dmscnym_a"/><path class="xsv91ibbi"/><path class="v3ew2xbez"/><path class="dvw9nibja"/><path class="fjp7zc-rc"/><path class="l_-1mhb1b"/><path class="fdf1_4bgh"/><path class="wvvwrwb5i"/><path class="dmmio8bme"/></g>`,
		"fallback": "iconaut:dialpad",
	});
}

export default Component;
