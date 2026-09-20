import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o58hkebvg.css';
import '../../css/n/npb8tdb2y.css';
import '../../css/s/s1a18_bhw.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3pTbVv4N"><g class="o58hkebvg"><path class="npb8tdb2y"/><path class="s1a18_bhw"/></g></mask></defs><path mask="url(#SVG3pTbVv4N)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:direction-alt-duotone-line",
	});
}

export default Component;
