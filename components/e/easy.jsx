import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu2vv7b8r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmIvModQC"><path class="lu2vv7b8r"/></mask></defs><path mask="url(#SVGmIvModQC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:easy",
	});
}

export default Component;
