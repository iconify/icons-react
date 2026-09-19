import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/m/m0k58sx-f.css';
import '../../css/p/p3l09fb9z.css';
import '../../css/x/xke-lac5i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgiedfeFn"><g class="wwvp95byt"><path class="m0k58sx-f"/><path class="p3l09fb9z"/><path class="xke-lac5i"/></g></mask></defs><path mask="url(#SVGgiedfeFn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:avocado-one",
	});
}

export default Component;
