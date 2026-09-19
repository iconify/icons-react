import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/g/gzmvcl1yv.css';
import '../../css/g/gyui38byj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="gzmvcl1yv"/><path class="gyui38byj"/></g>`,
		"fallback": "icon-park:align-bottom",
	});
}

export default Component;
