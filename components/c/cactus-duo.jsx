import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6plzccju.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iqpj3cywr.css';
import '../../css/x/xvgwadc1r.css';
import '../../css/n/nxx61nbqr.css';
import '../../css/j/jptgulbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary z6plzccju"/><g class="dt0cm9dhy primary"><path class="iqpj3cywr"/><path class="xvgwadc1r"/><path class="nxx61nbqr"/><path class="jptgulbjq"/></g>`,
		"fallback": "iconaut:cactus-duo",
	});
}

export default Component;
