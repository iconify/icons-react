import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnxr3dbjd.css';
import '../../css/x/x4maqhbtx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnxr3dbjd"/><path class="x4maqhbtx"/>`,
		"fallback": "material-icon-theme:folder-jinja-open-light",
	});
}

export default Component;
