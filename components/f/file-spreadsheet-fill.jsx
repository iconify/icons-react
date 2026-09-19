import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvw4nff7k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvw4nff7k"/>`,
		"fallback": "bi:file-spreadsheet-fill",
	});
}

export default Component;
