import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8wrvjbqf.css';
import '../../css/o/od1qbkb-t.css';
import '../../css/p/pwrb__blp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8wrvjbqf"/><path class="od1qbkb-t"/><path class="pwrb__blp"/>`,
		"fallback": "energy-icons:beach-hut-48",
	});
}

export default Component;
