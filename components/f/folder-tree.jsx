import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/odac6qbib.css';
import '../../css/t/tfn-km_fs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="odac6qbib"/><path class="tfn-km_fs"/></g>`,
		"fallback": "hugeicons:folder-tree",
	});
}

export default Component;
