import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poz-6ab6g.css';
import '../../css/e/eik2w9bro.css';
import '../../css/o/o-67ar76j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poz-6ab6g"/><path class="eik2w9bro"/><path class="o-67ar76j"/>`,
		"fallback": "streamline-freehand:headphones-1",
	});
}

export default Component;
