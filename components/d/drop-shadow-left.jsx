import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/d/dx3-s3bgy.css';
import '../../css/p/pvol4__sc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8Rmg3d6V"><g class="hv130ab-t"><path clip-rule="evenodd" class="dx3-s3bgy"/><path class="pvol4__sc"/></g></mask></defs><path mask="url(#SVG8Rmg3d6V)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:drop-shadow-left",
	});
}

export default Component;
