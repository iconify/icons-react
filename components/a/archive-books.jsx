import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/inruuxkno.css';
import '../../css/h/h99-3z_et.css';
import '../../css/w/w7nij6b1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="inruuxkno"/><path class="h99-3z_et"/><path class="w7nij6b1l"/></g>`,
		"fallback": "streamline-ultimate:archive-books",
	});
}

export default Component;
