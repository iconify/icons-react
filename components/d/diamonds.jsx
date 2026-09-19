import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/u/ue2pxfmqa.css';
import '../../css/t/tqpdnhbhv.css';
import '../../css/h/h3ta2nbht.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqnNeNdqQ"><g class="wwvp95byt"><path class="ue2pxfmqa"/><path class="tqpdnhbhv"/><path class="h3ta2nbht"/></g></mask></defs><path mask="url(#SVGqnNeNdqQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:diamonds",
	});
}

export default Component;
