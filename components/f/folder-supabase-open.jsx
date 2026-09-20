import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mad3lj_un.css';
import '../../css/y/ynyhw8b3u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mad3lj_un"/><path class="ynyhw8b3u"/>`,
		"fallback": "material-icon-theme:folder-supabase-open",
	});
}

export default Component;
