import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bof0itb0x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bof0itb0x"/>`,
		"fallback": "material-icon-theme:expo-light",
	});
}

export default Component;
