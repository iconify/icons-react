import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sgtrtkb3i.css';
import '../../css/e/e7jvezb2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sgtrtkb3i"/><path class="e7jvezb2a"/></g>`,
		"fallback": "streamline-ultimate:bing-search-logo",
	});
}

export default Component;
