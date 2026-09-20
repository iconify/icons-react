import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jb-03yjgh.css';
import '../../css/k/knh0k5bqt.css';
import '../../css/a/attsc9boi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jb-03yjgh"/><path class="knh0k5bqt"/><path class="attsc9boi"/></g>`,
		"fallback": "streamline-kameleon-color:cone-duo",
	});
}

export default Component;
