import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n5jykqb5j.css';
import '../../css/v/v427q6u5f.css';
import '../../css/y/y27fewbmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n5jykqb5j"/><path class="v427q6u5f"/><path class="y27fewbmh"/></g>`,
		"fallback": "struq:history",
	});
}

export default Component;
