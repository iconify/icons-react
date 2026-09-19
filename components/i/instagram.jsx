import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8xyuzbbe.css';
import '../../css/n/nha8y7oaq.css';
import '../../css/m/mp4ag1boz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGy4YSvdBO"><g class="ft5dv1b6b"><path class="h8xyuzbbe"/><path class="nha8y7oaq"/><path class="mp4ag1boz"/></g></mask></defs><path mask="url(#SVGy4YSvdBO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:instagram",
	});
}

export default Component;
