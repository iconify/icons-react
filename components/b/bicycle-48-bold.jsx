import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ragezd9rk.css';
import '../../css/k/k4d32yquc.css';
import '../../css/q/qqs5z84kv.css';
import '../../css/s/szn1rdbov.css';
import '../../css/x/x9cdk3d8e.css';
import '../../css/f/f36yu7m0l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ragezd9rk"/><path class="k4d32yquc"/><path class="qqs5z84kv"/><path class="szn1rdbov"/><path class="x9cdk3d8e"/><path class="f36yu7m0l"/>`,
		"fallback": "energy-icons:bicycle-48-bold",
	});
}

export default Component;
