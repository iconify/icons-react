import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5bpy3h5o.css';
import '../../css/l/ls7e_sb6t.css';
import '../../css/c/c3wcwvbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5bpy3h5o"/><path class="ls7e_sb6t"/><path class="c3wcwvbyk"/>`,
		"fallback": "lucide-extended:folder-sync-filled",
	});
}

export default Component;
