import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/v/vzvejhd5m.css';
import '../../css/x/xcmo0acsd.css';
import '../../css/k/k0i3-hbxj.css';
import '../../css/e/e7647acjt.css';
import '../../css/m/mas0jobrt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="vzvejhd5m"/><path class="xcmo0acsd"/><path class="k0i3-hbxj"/><path class="e7647acjt"/><ellipse class="mas0jobrt"/></g>`,
		"fallback": "icon-park:french-fries",
	});
}

export default Component;
