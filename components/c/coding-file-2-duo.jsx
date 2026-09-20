import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jb-03yjgh.css';
import '../../css/m/mr6lekbkj.css';
import '../../css/a/ae3ekbltv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jb-03yjgh"/><path class="mr6lekbkj"/><path class="ae3ekbltv"/></g>`,
		"fallback": "streamline-kameleon-color:coding-file-2-duo",
	});
}

export default Component;
