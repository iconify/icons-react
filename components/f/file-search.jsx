import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/zaffh1bwb.css';
import '../../css/t/t6ehjqagz.css';
import '../../css/j/jutwg48hp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="zaffh1bwb"/><path class="t6ehjqagz"/><path class="jutwg48hp"/></g>`,
		"fallback": "matita:file-search",
	});
}

export default Component;
