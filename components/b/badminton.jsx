import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqznn1ydc.css';
import '../../css/a/a4v76gi7m.css';
import '../../css/w/wt1fcu4ke.css';
import '../../css/k/kmj7kph2b.css';
import '../../css/z/zb_4k5z-h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4M0msdHi"><g class="wqznn1ydc"><path class="a4v76gi7m"/><path class="wt1fcu4ke"/><path class="kmj7kph2b"/><path class="zb_4k5z-h"/></g></mask></defs><path mask="url(#SVG4M0msdHi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:badminton",
	});
}

export default Component;
