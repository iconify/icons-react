import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voi8a1ikb.css';
import '../../css/s/sy1oyztyz.css';
import '../../css/g/g7toxcbjz.css';
import '../../css/u/u-zkxtija.css';
import '../../css/u/urseeeotk.css';
import '../../css/y/y5sbplbnp.css';
import '../../css/x/x3us4qbfi.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cls-3 voi8a1ikb"/><path class="sy1oyztyz"/><path class="cls-1 g7toxcbjz"/><path class="cls-4 u-zkxtija"/><path class="cls-5 urseeeotk"/><path class="cls-2 y5sbplbnp"/><path class="x3us4qbfi"/>`,
		"fallback": "devicon:babylonjs-wordmark",
	});
}

export default Component;
