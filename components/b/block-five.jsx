import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9ai3q1cw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIRubIbDG"><path class="q9ai3q1cw"/></mask></defs><path mask="url(#SVGIRubIbDG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:block-five",
	});
}

export default Component;
