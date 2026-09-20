import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r48oh6fou.css';
import '../../css/v/vwhy-4s3p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r48oh6fou"/><path class="vwhy-4s3p"/>`,
		"fallback": "material-icon-theme:folder-hook-open",
	});
}

export default Component;
