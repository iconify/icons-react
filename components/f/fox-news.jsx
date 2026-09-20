import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv26cacrn.css';
import '../../css/t/tn13mns0i.css';
import '../../css/m/mdz63-bin.css';
import '../../css/e/eh0vm5bms.css';

const viewBox = {"width":1235,"height":1235};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv26cacrn"/><path class="tn13mns0i"/><path class="mdz63-bin"/><path class="eh0vm5bms"/>`,
		"fallback": "thesvg-color:fox-news",
	});
}

export default Component;
