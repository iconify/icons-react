import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/h/haq9eoojl.css';
import '../../css/f/f0l68obgd.css';
import '../../css/w/wijxmabzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="haq9eoojl"/><path class="f0l68obgd"/><path class="wijxmabzw"/></g>`,
		"fallback": "streamline-logos:codepen-logo",
	});
}

export default Component;
