import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m088jbc1k.css';
import '../../css/o/osy329bko.css';
import '../../css/w/wd942qb8r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBnFofygF"><g class="s9cl3zbei"><path class="m088jbc1k"/><rect class="osy329bko"/><path class="wd942qb8r"/></g></mask></defs><path mask="url(#SVGBnFofygF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:financing-two",
	});
}

export default Component;
