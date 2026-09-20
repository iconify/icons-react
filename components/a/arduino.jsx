import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i623bfbsp.css';
import '../../css/v/veyji9_1k.css';
import '../../css/d/dm587nnti.css';
import '../../css/y/ymmq4nbfb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i623bfbsp"/><path class="veyji9_1k"/><path class="dm587nnti"/><path class="ymmq4nbfb"/>`,
		"fallback": "material-icon-theme:arduino",
	});
}

export default Component;
