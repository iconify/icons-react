import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/h/hjzfcubdn.css';
import '../../css/e/ezv4k-6oy.css';
import '../../css/v/v8cds7a2u.css';
import '../../css/i/i7-4nz25i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJNO7qb8d"><g class="wwvp95byt"><path class="hjzfcubdn"/><path class="ezv4k-6oy"/><path class="v8cds7a2u"/><path class="i7-4nz25i"/></g></mask></defs><path mask="url(#SVGJNO7qb8d)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:full-dress-longuette",
	});
}

export default Component;
