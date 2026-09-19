import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nzqycdczf.css';
import '../../css/x/xewu25_6u.css';
import '../../css/b/bd7xzcbfi.css';
import '../../css/m/m4wspfbym.css';
import '../../css/w/wxr-_bbdp.css';
import '../../css/a/aewf33bwz.css';
import '../../css/a/afm122brc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nzqycdczf"/><path class="xewu25_6u"/><path class="bd7xzcbfi"/><path class="m4wspfbym"/><path class="wxr-_bbdp"/><path class="aewf33bwz"/><path class="afm122brc"/></g>`,
		"fallback": "fluent-emoji-flat:chipmunk",
	});
}

export default Component;
