import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2myycbsp.css';
import '../../css/p/pu43vbcbj.css';
import '../../css/a/a-8czfekn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2myycbsp"/><path class="pu43vbcbj"/><path class="a-8czfekn"/>`,
		"fallback": "energy-icons:file-clock-48",
	});
}

export default Component;
