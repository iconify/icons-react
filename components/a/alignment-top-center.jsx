import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/i/i5p4ugbzq.css';
import '../../css/c/c5eubdc-s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOyT8NUdd"><g class="gopnm44um"><rect class="i5p4ugbzq"/><path class="c5eubdc-s"/></g></mask></defs><path mask="url(#SVGOyT8NUdd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:alignment-top-center",
	});
}

export default Component;
