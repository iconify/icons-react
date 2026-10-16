import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykwqglbwb.css';
import '../../css/p/p18co30jw.css';
import '../../css/c/cglx9k6ox.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykwqglbwb"/><path class="p18co30jw"/><path class="cglx9k6ox"/>`,
		"fallback": "energy-icons:folder-input-20",
	});
}

export default Component;
