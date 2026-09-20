import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmpwcy8fr.css';
import '../../css/t/tggoaoeaz.css';
import '../../css/m/mg09rj_6s.css';
import '../../css/m/mljk_1m2e.css';
import '../../css/h/huuajhmrh.css';
import '../../css/u/uiaz26ttg.css';
import '../../css/f/f9om3zb4l.css';
import '../../css/s/ssb6b8uzd.css';
import '../../css/m/mgd-d8sbx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="dmpwcy8fr"/><path class="tggoaoeaz"/><path class="mg09rj_6s"/><path class="mljk_1m2e"/><circle class="huuajhmrh"/><path class="uiaz26ttg"/><path class="f9om3zb4l"/><path class="ssb6b8uzd"/><path class="mgd-d8sbx"/>`,
		"fallback": "openmoji:hot-face",
	});
}

export default Component;
