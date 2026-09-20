import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyz1abdrz.css';
import '../../css/g/g97lob8cr.css';
import '../../css/i/ig2qa8liy.css';
import '../../css/d/dgrb85brx.css';
import '../../css/d/dcqdxh5zc.css';
import '../../css/g/gm9_6hblj.css';
import '../../css/z/z2qip-omr.css';
import '../../css/n/nr2vhsfwv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyz1abdrz"/><path class="g97lob8cr"/><path class="ig2qa8liy"/><path class="dgrb85brx"/><g class="dcqdxh5zc"><path class="gm9_6hblj"/><path class="z2qip-omr"/><path class="nr2vhsfwv"/></g>`,
		"fallback": "openmoji:high-speed-train",
	});
}

export default Component;
