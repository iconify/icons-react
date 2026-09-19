import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/go-wgnytc.css';
import '../../css/f/f1_-8qbch.css';
import '../../css/z/zgeph6dll.css';
import '../../css/u/uuli4qiif.css';
import '../../css/m/miu19cb_u.css';
import '../../css/k/ktk4qzb9h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="go-wgnytc"/><path class="f1_-8qbch"/><path class="zgeph6dll"/><path class="uuli4qiif"/><path class="miu19cb_u"/><path class="ktk4qzb9h"/></g>`,
		"fallback": "glyphs:boxing-glove-duo",
	});
}

export default Component;
