import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/i/i5p4ugbzq.css';
import '../../css/n/nh7i7wb4z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQmX6Ne5j"><g class="gopnm44um"><rect class="i5p4ugbzq"/><path class="nh7i7wb4z"/></g></mask></defs><path mask="url(#SVGQmX6Ne5j)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:alignment-left-bottom",
	});
}

export default Component;
