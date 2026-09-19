import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/s/sceen7deg.css';
import '../../css/o/obd0yacex.css';
import '../../css/k/kyp5fljps.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPVHP7CuH"><g class="rohhhzb0l"><path class="sceen7deg"/><path class="obd0yacex"/><path class="kyp5fljps"/></g></mask></defs><path mask="url(#SVGPVHP7CuH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:arc-de-triomphe",
	});
}

export default Component;
