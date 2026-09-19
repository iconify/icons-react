import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lln4j2bfx.css';
import '../../css/m/m7erot3eb.css';
import '../../css/h/humhrf4wy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGu0sYleFi"><g class="ft5dv1b6b"><path class="lln4j2bfx"/><path class="m7erot3eb"/><path class="humhrf4wy"/></g></mask></defs><path mask="url(#SVGu0sYleFi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:birthday-cake",
	});
}

export default Component;
