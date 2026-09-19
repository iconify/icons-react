import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/g/gmwc-_fis.css';
import '../../css/d/dhnf8qbnv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="gmwc-_fis"/><path class="dhnf8qbnv"/></g>`,
		"fallback": "icon-park:copy",
	});
}

export default Component;
