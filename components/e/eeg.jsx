import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtgiu4vpw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtgiu4vpw"/>`,
		"fallback": "icon-park-outline:eeg",
	});
}

export default Component;
