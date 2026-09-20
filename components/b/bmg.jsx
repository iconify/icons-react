import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gilpv_ahg.css';
import '../../css/w/wo0pf4bui.css';
import '../../css/z/zqwds7qfz.css';
import '../../css/a/aryrtpe7w.css';
import '../../css/z/zy2q3v_mu.css';

const viewBox = {"width":105,"height":35};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gilpv_ahg"><path clip-rule="evenodd" class="wo0pf4bui"/><path class="zqwds7qfz"/><path class="aryrtpe7w"/><path class="zy2q3v_mu"/></g>`,
		"fallback": "thesvg-color:bmg",
	});
}

export default Component;
