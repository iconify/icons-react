import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/z/z1fu_mb4n.css';
import '../../css/l/lk69x9__v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaEhKWcti"><g class="ylrso7y3c"><path class="z1fu_mb4n"/><path class="lk69x9__v"/></g></mask></defs><path mask="url(#SVGaEhKWcti)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:crown",
	});
}

export default Component;
