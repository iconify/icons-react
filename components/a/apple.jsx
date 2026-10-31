import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pveokts-z.css';
import '../../css/c/ckle73lto.css';
import '../../css/b/beflqlvsa.css';
import '../../css/i/imlamlumm.css';
import '../../css/c/ceb50jbsx.css';
import '../../css/w/wh85ymupj.css';
import '../../css/n/n_zp8qabl.css';
import '../../css/e/e9yjolbft.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g display="block"><path class="pveokts-z"/><path class="ckle73lto"/><path class="beflqlvsa"/><path class="imlamlumm"/><path class="ceb50jbsx"/><path class="wh85ymupj"/><path class="n_zp8qabl"/><path class="e9yjolbft"/></g>`,
		"fallback": "iconito:apple",
	});
}

export default Component;
