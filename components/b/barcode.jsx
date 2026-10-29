import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-wcl9bei.css';
import '../../css/a/aranxlsbw.css';
import '../../css/o/of4wwqxia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-wcl9bei"/><path class="aranxlsbw"/><path class="of4wwqxia"/>`,
		"fallback": "withicons-bauhaus:barcode",
	});
}

export default Component;
