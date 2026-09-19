import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/i/i5p4ugbzq.css';
import '../../css/w/w79bkl5va.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqdlc9dAl"><g class="gopnm44um"><rect class="i5p4ugbzq"/><path class="w79bkl5va"/></g></mask></defs><path mask="url(#SVGqdlc9dAl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:alignment-vertical-center",
	});
}

export default Component;
