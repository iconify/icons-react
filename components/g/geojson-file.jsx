import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks04u331z.css';
import '../../css/a/a-sqa4bwz.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks04u331z"/><path class="a-sqa4bwz"/>`,
		"fallback": "gis:geojson-file",
	});
}

export default Component;
