import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrvehib-t.css';
import '../../css/x/xm21wv__h.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrvehib-t"/><path class="xm21wv__h"/>`,
		"fallback": "gis:esri-json-file",
	});
}

export default Component;
