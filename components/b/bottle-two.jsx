import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/b/bgkze4e7q.css';
import '../../css/k/kn_2t0bjv.css';
import '../../css/k/ktgvdwb7j.css';
import '../../css/x/xusl85bge.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZ2KWNSfL"><g class="gopnm44um"><path class="bgkze4e7q"/><path class="kn_2t0bjv"/><path class="ktgvdwb7j"/><path class="xusl85bge"/></g></mask></defs><path mask="url(#SVGZ2KWNSfL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bottle-two",
	});
}

export default Component;
