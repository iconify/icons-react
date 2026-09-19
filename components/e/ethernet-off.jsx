import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/i/i5p4ugbzq.css';
import '../../css/p/pz5-7suga.css';
import '../../css/i/iibl-o2rj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtDqkQbSn"><g class="gopnm44um"><rect class="i5p4ugbzq"/><path class="pz5-7suga"/><path class="iibl-o2rj"/></g></mask></defs><path mask="url(#SVGtDqkQbSn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:ethernet-off",
	});
}

export default Component;
