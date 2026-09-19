import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0ye5_bog.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5AuuMeAo"><path class="o0ye5_bog"/></mask></defs><path mask="url(#SVG5AuuMeAo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:down-two",
	});
}

export default Component;
