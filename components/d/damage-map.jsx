import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/s/ssnzky-qs.css';
import '../../css/u/upkaycbwx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnVDTcbDL"><g class="adexpl72i"><path class="ssnzky-qs"/><path clip-rule="evenodd" class="upkaycbwx"/></g></mask></defs><path mask="url(#SVGnVDTcbDL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:damage-map",
	});
}

export default Component;
