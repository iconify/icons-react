import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/i/i5p4ugbzq.css';
import '../../css/o/od95zgbpn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGn7lXqe7v"><g class="gopnm44um"><rect class="i5p4ugbzq"/><path class="od95zgbpn"/></g></mask></defs><path mask="url(#SVGn7lXqe7v)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:alignment-bottom-center",
	});
}

export default Component;
