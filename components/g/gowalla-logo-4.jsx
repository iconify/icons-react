import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/p/pb8akpk-u.css';
import '../../css/n/n7v2ymbet.css';
import '../../css/a/av1gbnoiu.css';
import '../../css/d/du17i2b5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="pb8akpk-u"/><path class="n7v2ymbet"/><path class="av1gbnoiu"/><path class="du17i2b5p"/></g>`,
		"fallback": "streamline-logos:gowalla-logo-4",
	});
}

export default Component;
