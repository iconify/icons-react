import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9k8lxuwq.css';
import '../../css/j/j9ictigtg.css';
import '../../css/h/ht5m2bb5f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9k8lxuwq"/><path class="j9ictigtg"/><path class="ht5m2bb5f"/>`,
		"fallback": "material-icon-theme:folder-cobol-open",
	});
}

export default Component;
