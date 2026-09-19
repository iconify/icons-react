import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxed8u81r.css';
import '../../css/g/go3ospizx.css';
import '../../css/w/w394v7_1v.css';
import '../../css/q/qgmbq0owx.css';
import '../../css/k/kxlzjtb6v.css';
import '../../css/x/xbf4qkbwj.css';
import '../../css/g/gbsf0r5os.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxed8u81r"/><path class="go3ospizx"/><path class="w394v7_1v"/><path class="qgmbq0owx"/><path class="kxlzjtb6v"/><path class="xbf4qkbwj"/><path class="gbsf0r5os"/>`,
		"fallback": "fxemoji:dog",
	});
}

export default Component;
