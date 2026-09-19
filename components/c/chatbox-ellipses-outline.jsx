import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-ygl7brj.css';
import '../../css/d/dc-p_7bld.css';
import '../../css/i/iehx50jjq.css';
import '../../css/h/hnm18mbpu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-ygl7brj"/><circle class="dc-p_7bld"/><circle class="iehx50jjq"/><circle class="hnm18mbpu"/>`,
		"fallback": "famicons:chatbox-ellipses-outline",
	});
}

export default Component;
