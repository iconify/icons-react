import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odlpk9b9a.css';
import '../../css/w/wpnkgb6ix.css';
import '../../css/o/omnhf8jcb.css';
import '../../css/e/e-lp3bbub.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odlpk9b9a"/><path class="wpnkgb6ix"/><path class="omnhf8jcb"/><path class="e-lp3bbub"/>`,
		"fallback": "energy-icons:co2-storage-48-bold",
	});
}

export default Component;
