import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/y/yd6xyscff.css';
import '../../css/p/ppdb-46ij.css';
import '../../css/o/ob-stir9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="yd6xyscff"/><path class="ppdb-46ij"/><path class="ob-stir9j"/></g>`,
		"fallback": "lets-icons:boxes",
	});
}

export default Component;
