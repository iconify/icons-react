import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szahujb-p.css';
import '../../css/r/rehf-ikcs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szahujb-p"/><path class="rehf-ikcs"/>`,
		"fallback": "energy-icons:file-zip-20",
	});
}

export default Component;
