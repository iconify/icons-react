import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbryxcakh.css';
import '../../css/v/ven9i71ui.css';
import '../../css/c/cvs64bbzk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbryxcakh"/><path class="ven9i71ui"/><path class="cvs64bbzk"/>`,
		"fallback": "energy-icons:electric-ferry-48",
	});
}

export default Component;
