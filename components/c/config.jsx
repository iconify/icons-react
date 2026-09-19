import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/n/nfncz0b5x.css';
import '../../css/l/llqfild5y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpT6hzdOH"><g class="ylrso7y3c"><path class="nfncz0b5x"/><path class="llqfild5y"/></g></mask></defs><path mask="url(#SVGpT6hzdOH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:config",
	});
}

export default Component;
