import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/r/r-q-4y1nu.css';
import '../../css/m/map5wfb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="r-q-4y1nu"/><path class="map5wfb2t"/></g>`,
		"fallback": "lets-icons:folder-file",
	});
}

export default Component;
