import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd1yx_bjk.css';
import '../../css/x/xstspbbit.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd1yx_bjk"/><path class="xstspbbit"/>`,
		"fallback": "material-icon-theme:folder-helm",
	});
}

export default Component;
