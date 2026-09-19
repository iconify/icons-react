import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/s/sz6vb1uxi.css';
import '../../css/y/y04qg5bxg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYjSiaecR"><g class="ylrso7y3c"><path class="sz6vb1uxi"/><path class="y04qg5bxg"/></g></mask></defs><path mask="url(#SVGYjSiaecR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-quality",
	});
}

export default Component;
