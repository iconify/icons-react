import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/lmm5f77sk.css';
import '../../css/r/rgqhnbciz.css';
import '../../css/o/o4fuzn82d.css';
import '../../css/y/ybt2h0but.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhNMHdODu"><g class="gopnm44um"><path class="lmm5f77sk"/><path class="rgqhnbciz"/><path class="o4fuzn82d"/><path class="ybt2h0but"/></g></mask></defs><path mask="url(#SVGhNMHdODu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:excel",
	});
}

export default Component;
