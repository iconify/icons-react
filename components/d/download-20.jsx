import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn4hkfpso.css';
import '../../css/e/e1cs2-20w.css';
import '../../css/x/x72zhtbvy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn4hkfpso"/><path class="e1cs2-20w"/><path class="x72zhtbvy"/>`,
		"fallback": "energy-icons:download-20",
	});
}

export default Component;
