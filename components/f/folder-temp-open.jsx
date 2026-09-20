import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls8n74bvk.css';
import '../../css/z/zj4ty50ji.css';
import '../../css/i/ihz108blo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls8n74bvk"/><path class="zj4ty50ji"/><path class="ihz108blo"/>`,
		"fallback": "material-icon-theme:folder-temp-open",
	});
}

export default Component;
