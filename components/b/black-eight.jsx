import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/i/iue2exw6u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGb3Ludd4g"><g class="ylrso7y3c"><path class="vkcj4bcdm"/><path class="iue2exw6u"/></g></mask></defs><path mask="url(#SVGb3Ludd4g)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:black-eight",
	});
}

export default Component;
