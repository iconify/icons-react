import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6b3i8cls.css';
import '../../css/x/xgcr5txor.css';
import '../../css/k/kroofvbxd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6b3i8cls"/><path class="xgcr5txor"/><path class="kroofvbxd"/>`,
		"fallback": "energy-icons:battery-alert-20",
	});
}

export default Component;
