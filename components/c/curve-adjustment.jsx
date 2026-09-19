import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wkaq4nb8y.css';
import '../../css/x/xhg7kxbgo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9e33wDeQ"><g class="ufeehvblu"><path class="wkaq4nb8y"/><path class="xhg7kxbgo"/></g></mask></defs><path mask="url(#SVG9e33wDeQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:curve-adjustment",
	});
}

export default Component;
