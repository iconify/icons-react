import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arbl_acfa.css';
import '../../css/j/jjurvxulj.css';
import '../../css/w/w3lw55b-f.css';
import '../../css/i/iii9vdbnp.css';
import '../../css/c/c2g-pd3xp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arbl_acfa"/><path class="jjurvxulj"/><path class="w3lw55b-f"/><path class="iii9vdbnp"/><path class="c2g-pd3xp"/>`,
		"fallback": "energy-icons:ev-plugged-48-bold",
	});
}

export default Component;
