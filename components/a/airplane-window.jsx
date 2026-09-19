import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/t/t00azbbug.css';
import '../../css/d/di1i7v7pe.css';
import '../../css/l/l66x-ingq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNn2oBKbq"><g class="wwvp95byt"><path class="t00azbbug"/><path class="di1i7v7pe"/><path class="l66x-ingq"/></g></mask></defs><path mask="url(#SVGNn2oBKbq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:airplane-window",
	});
}

export default Component;
