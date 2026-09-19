import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/i/i5p4ugbzq.css';
import '../../css/x/xbmvnlzdf.css';
import '../../css/d/dd5c92uag.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGN6z3td1m"><g class="gopnm44um"><rect class="i5p4ugbzq"/><path class="xbmvnlzdf"/><path class="dd5c92uag"/></g></mask></defs><path mask="url(#SVGN6z3td1m)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:chinese",
	});
}

export default Component;
