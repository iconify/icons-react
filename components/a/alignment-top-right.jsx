import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/i/i5p4ugbzq.css';
import '../../css/k/kmd1bsbac.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvO5iadUc"><g class="gopnm44um"><rect class="i5p4ugbzq"/><path class="kmd1bsbac"/></g></mask></defs><path mask="url(#SVGvO5iadUc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:alignment-top-right",
	});
}

export default Component;
