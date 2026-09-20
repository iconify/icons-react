import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f32-ot3jq.css';
import '../../css/g/gxy-e0m8d.css';
import '../../css/b/bc9znburg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f32-ot3jq"/><path class="gxy-e0m8d"/><path class="bc9znburg"/>`,
		"fallback": "material-icon-theme:folder-vue-directives",
	});
}

export default Component;
