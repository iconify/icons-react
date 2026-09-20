import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjcbaabfa.css';
import '../../css/c/cgwih5znj.css';
import '../../css/c/cl_ajub-n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjcbaabfa"/><path class="cgwih5znj"/><path class="cl_ajub-n"/>`,
		"fallback": "material-icon-theme:folder-backup-open",
	});
}

export default Component;
