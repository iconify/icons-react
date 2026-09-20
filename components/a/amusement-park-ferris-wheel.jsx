import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cn1uu1bkl.css';
import '../../css/h/hghqj0b8l.css';
import '../../css/q/qb6xfsbsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cn1uu1bkl"/><path class="hghqj0b8l"/><path class="qb6xfsbsb"/></g>`,
		"fallback": "streamline-freehand:amusement-park-ferris-wheel",
	});
}

export default Component;
