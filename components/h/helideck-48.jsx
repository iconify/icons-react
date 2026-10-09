import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-j1i2muo.css';
import '../../css/q/qxu7-jb9g.css';
import '../../css/e/e647zfbaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-j1i2muo"/><path class="qxu7-jb9g"/><path class="e647zfbaz"/>`,
		"fallback": "energy-icons:helideck-48",
	});
}

export default Component;
