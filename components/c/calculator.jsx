import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wr9hafbnl.css';
import '../../css/r/rjaer0dlx.css';
import '../../css/f/f8pnpzbfo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHl06vcSf"><g class="ufeehvblu"><path class="wr9hafbnl"/><path class="rjaer0dlx"/><path class="f8pnpzbfo"/></g></mask></defs><path mask="url(#SVGHl06vcSf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:calculator",
	});
}

export default Component;
