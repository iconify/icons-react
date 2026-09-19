import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/i/i5p4ugbzq.css';
import '../../css/g/gt0d5wbpk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtllWjewa"><g class="gopnm44um"><rect class="i5p4ugbzq"/><path class="gt0d5wbpk"/></g></mask></defs><path mask="url(#SVGtllWjewa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:alignment-horizontal-top",
	});
}

export default Component;
