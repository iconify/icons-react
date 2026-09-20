import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/q/qs6v78s3j.css';
import '../../css/m/mmw6b732y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="qs6v78s3j"/><path class="mmw6b732y"/></g>`,
		"fallback": "tdesign:face-retouching",
	});
}

export default Component;
