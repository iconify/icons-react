import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdm7i77zj.css';
import '../../css/p/p0z48hbkv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdm7i77zj"/><path class="p0z48hbkv"/>`,
		"fallback": "material-icon-theme:folder-gamemaker-open",
	});
}

export default Component;
