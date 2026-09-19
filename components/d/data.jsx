import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/zd1deebgz.css';
import '../../css/w/w8aqjtb4l.css';
import '../../css/k/k4d7ijbpl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwxOyzcPc"><g class="aql7dnt-u"><path class="zd1deebgz"/><path class="w8aqjtb4l"/><ellipse class="k4d7ijbpl"/></g></mask></defs><path mask="url(#SVGwxOyzcPc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:data",
	});
}

export default Component;
