import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/t/t2btn03ba.css';
import '../../css/v/vmjy8_71p.css';
import '../../css/z/zaecr_y5n.css';
import '../../css/x/xt4a9qimp.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="t2btn03ba"/><circle class="vmjy8_71p"/><path class="zaecr_y5n"/><path class="xt4a9qimp"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-kyrgyzstan",
	});
}

export default Component;
