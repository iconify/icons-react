import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swifegtcy.css';
import '../../css/f/falyj_29j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swifegtcy"/><path class="falyj_29j"/>`,
		"fallback": "material-icon-theme:folder-custom-open",
	});
}

export default Component;
