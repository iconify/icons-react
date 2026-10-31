import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2sb_fb7f.css';
import '../../css/c/c__4199fc.css';
import '../../css/f/fjbbd-pcw.css';
import '../../css/r/rp4fbybhh.css';
import '../../css/g/g2n2btbln.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2sb_fb7f"/><path class="c__4199fc"/><path class="fjbbd-pcw"/><path class="rp4fbybhh"/><path class="g2n2btbln"/>`,
		"fallback": "iconito:brownie",
	});
}

export default Component;
