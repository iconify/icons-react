import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/j/j6j72ac8t.css';
import '../../css/f/f28irgb8p.css';
import '../../css/m/mqge99bdl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBTwGNeNh"><g class="ufeehvblu"><rect class="j6j72ac8t"/><path class="f28irgb8p"/><path class="mqge99bdl"/></g></mask></defs><path mask="url(#SVGBTwGNeNh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:display",
	});
}

export default Component;
