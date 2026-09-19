import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_2i8ot7h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUuGtqhHU"><path class="o_2i8ot7h"/></mask></defs><path mask="url(#SVGUuGtqhHU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:five-five",
	});
}

export default Component;
