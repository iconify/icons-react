import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sj63uhsoc.css';
import '../../css/g/gurl2ypet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sj63uhsoc"/><rect class="gurl2ypet"/></g>`,
		"fallback": "lucide:hotel",
	});
}

export default Component;
