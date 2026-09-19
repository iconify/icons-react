import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjl0uebbh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLXXc1GxT"><path class="yjl0uebbh"/></mask></defs><path mask="url(#SVGLXXc1GxT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bookshelf",
	});
}

export default Component;
