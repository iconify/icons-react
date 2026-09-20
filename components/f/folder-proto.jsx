import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqh16pv3v.css';
import '../../css/q/qxuya4bvt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqh16pv3v"/><path class="qxuya4bvt"/>`,
		"fallback": "material-icon-theme:folder-proto",
	});
}

export default Component;
