import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxf38ybrm.css';
import '../../css/q/qrlb8jbjn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxf38ybrm"/><path class="qrlb8jbjn"/>`,
		"fallback": "material-icon-theme:folder-wakatime-open",
	});
}

export default Component;
