import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va3vigmkv.css';
import '../../css/q/qsn33xeca.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va3vigmkv"/><path class="qsn33xeca"/>`,
		"fallback": "material-icon-theme:folder-astro",
	});
}

export default Component;
