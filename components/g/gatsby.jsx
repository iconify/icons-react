import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oudmp2tzk.css';
import '../../css/y/y2ef2wbpb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="oudmp2tzk"/><path class="y2ef2wbpb"/>`,
		"fallback": "selfhst:gatsby",
	});
}

export default Component;
