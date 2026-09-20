import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a9kfl5brj.css';
import '../../css/p/psd-2hbot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a9kfl5brj"/><path class="psd-2hbot"/></g>`,
		"fallback": "tdesign:browse-gallery",
	});
}

export default Component;
