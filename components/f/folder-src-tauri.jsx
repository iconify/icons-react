import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs74-mbgw.css';
import '../../css/a/agsasm69p.css';
import '../../css/o/okzx0ce0e.css';
import '../../css/a/a_rzf3b1l.css';
import '../../css/i/i8hgzrz-p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs74-mbgw"/><path class="agsasm69p"/><path class="okzx0ce0e"/><path clip-rule="evenodd" class="a_rzf3b1l"/><path clip-rule="evenodd" class="i8hgzrz-p"/>`,
		"fallback": "material-icon-theme:folder-src-tauri",
	});
}

export default Component;
