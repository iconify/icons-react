import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gz3sv5byc.css';
import '../../css/u/ubyycbaxw.css';
import '../../css/z/zzhwb5nor.css';
import '../../css/u/uvgh2l5nr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gz3sv5byc wm-shadow"/><path class="ubyycbaxw"/><path class="zzhwb5nor"/><path class="uvgh2l5nr"/></g>`,
		"fallback": "withicons-retro:avatar-robot",
	});
}

export default Component;
