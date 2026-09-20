import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r48oh6fou.css';
import '../../css/o/oy87qob8i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r48oh6fou"/><path class="oy87qob8i"/>`,
		"fallback": "material-icon-theme:folder-zeabur-open",
	});
}

export default Component;
