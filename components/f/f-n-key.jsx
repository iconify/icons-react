import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/i/i5p4ugbzq.css';
import '../../css/l/lwj-zrb7s.css';
import '../../css/p/pfczs7qky.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0WSjRcHR"><g class="gopnm44um"><rect class="i5p4ugbzq"/><path class="lwj-zrb7s"/><path class="pfczs7qky"/></g></mask></defs><path mask="url(#SVG0WSjRcHR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:f-n-key",
	});
}

export default Component;
