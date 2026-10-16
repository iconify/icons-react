import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw19-5bkm.css';
import '../../css/f/fv9h6ebsv.css';
import '../../css/r/r05k69bmo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw19-5bkm"/><path class="fv9h6ebsv"/><path class="r05k69bmo"/>`,
		"fallback": "energy-icons:folder-input-48-bold",
	});
}

export default Component;
