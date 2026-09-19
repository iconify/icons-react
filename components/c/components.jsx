import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5qqsfbyd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGA4mOJdqT"><path class="n5qqsfbyd"/></mask></defs><path mask="url(#SVGA4mOJdqT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:components",
	});
}

export default Component;
