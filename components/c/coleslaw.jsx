import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x12w62b5u.css';
import '../../css/d/dpnckzvte.css';
import '../../css/o/oehnk3p0l.css';
import '../../css/i/i39b3mb6w.css';
import '../../css/m/m6xj2qbhs.css';
import '../../css/u/uulgt9ngz.css';
import '../../css/l/l2gszcktu.css';
import '../../css/p/pdduibaph.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x12w62b5u"/><path class="dpnckzvte"/><path class="oehnk3p0l"/><path class="i39b3mb6w"/><path class="m6xj2qbhs"/><path class="uulgt9ngz"/><path class="l2gszcktu"/><path class="pdduibaph"/>`,
		"fallback": "iconito:coleslaw",
	});
}

export default Component;
