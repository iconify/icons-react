import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5t4qho-n.css';
import '../../css/l/lxylry8gl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5t4qho-n ouiIcon__fillSecondary"/><path class="lxylry8gl"/>`,
		"fallback": "oui:app-upgrade-assistant",
	});
}

export default Component;
