import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/e/ep3t1sbha.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGM1DSObKJ"><g class="ylrso7y3c"><path class="vkcj4bcdm"/><path class="ep3t1sbha"/></g></mask></defs><path mask="url(#SVGM1DSObKJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:contrast",
	});
}

export default Component;
