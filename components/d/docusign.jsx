import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttkhi0bup.css';
import '../../css/f/f0dax9b3f.css';
import '../../css/o/otkwx3beg.css';
import '../../css/v/vwxy9pbbd.css';

const viewBox = {"width":1200,"height":241.4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttkhi0bup"/><path class="f0dax9b3f"/><path class="otkwx3beg"/><path class="vwxy9pbbd"/>`,
		"fallback": "thesvg-color:docusign",
	});
}

export default Component;
