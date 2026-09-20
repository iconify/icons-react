import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdrwtopuu.css';
import '../../css/g/g8m7_r0va.css';
import '../../css/z/zhvw-ybch.css';
import '../../css/o/ogktbpbmc.css';
import '../../css/h/hx--hwb2h.css';
import '../../css/v/vyginh7-k.css';
import '../../css/h/ho-b0vb1r.css';
import '../../css/f/f1n1--byr.css';
import '../../css/u/uqmqhq3im.css';
import '../../css/o/oifzdnbzv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdrwtopuu"/><path class="g8m7_r0va"/><path class="zhvw-ybch"/><path class="ogktbpbmc"/><path class="hx--hwb2h"/><path class="vyginh7-k"/><path class="ho-b0vb1r"/><path class="f1n1--byr"/><path class="uqmqhq3im"/><path class="oifzdnbzv"/>`,
		"fallback": "streamline-emojis:graduation-cap",
	});
}

export default Component;
