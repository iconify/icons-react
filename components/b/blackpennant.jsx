import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifivasbnp.css';
import '../../css/p/ptb97odfw.css';
import '../../css/d/dmmpmib0w.css';
import '../../css/y/yr6a_mbii.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifivasbnp"/><path class="ptb97odfw"/><path class="dmmpmib0w"/><path class="yr6a_mbii"/>`,
		"fallback": "fxemoji:blackpennant",
	});
}

export default Component;
