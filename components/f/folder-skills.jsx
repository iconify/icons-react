import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frcmswb0i.css';
import '../../css/z/zza0bbbhx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frcmswb0i"/><path class="zza0bbbhx"/>`,
		"fallback": "material-icon-theme:folder-skills",
	});
}

export default Component;
