import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/z/z51mj2nbz.css';
import '../../css/z/z6g585zyw.css';
import '../../css/d/dbkz5gqwv.css';
import '../../css/v/vw_tqwb3j.css';
import '../../css/r/rfn52jbce.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="z51mj2nbz"/><path class="z6g585zyw"/><path class="dbkz5gqwv"/><path class="vw_tqwb3j"/><circle class="rfn52jbce"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-north-macedonia",
	});
}

export default Component;
