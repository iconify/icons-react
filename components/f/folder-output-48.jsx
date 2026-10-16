import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uobcpjbvq.css';
import '../../css/r/rogied72y.css';
import '../../css/t/tpcfugidh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uobcpjbvq"/><path class="rogied72y"/><path class="tpcfugidh"/>`,
		"fallback": "energy-icons:folder-output-48",
	});
}

export default Component;
