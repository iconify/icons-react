import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/z/zec3p4_0a.css';
import '../../css/f/fvibewhar.css';
import '../../css/k/kip315jrs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="xhdah4bbl"/><path class="zec3p4_0a"/><path class="fvibewhar"/><path class="kip315jrs"/></g>`,
		"fallback": "icon-park:asterisk-key",
	});
}

export default Component;
