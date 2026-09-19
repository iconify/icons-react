import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/i/i5p4ugbzq.css';
import '../../css/h/hz7q78o0c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4TP2IeyN"><g class="gopnm44um"><rect class="i5p4ugbzq"/><path class="hz7q78o0c"/></g></mask></defs><path mask="url(#SVG4TP2IeyN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:alignment-vertical-right",
	});
}

export default Component;
