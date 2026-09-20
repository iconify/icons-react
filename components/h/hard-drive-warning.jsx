import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pchupzqhj.css';
import '../../css/h/hg71ebcsy.css';
import '../../css/c/c5skm7bip.css';
import '../../css/j/jeup4er5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pchupzqhj"/><path class="hg71ebcsy"/><path class="c5skm7bip"/><path class="jeup4er5f"/></g>`,
		"fallback": "streamline-freehand-color:hard-drive-warning",
	});
}

export default Component;
