import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2la8ubsr.css';
import '../../css/r/rphcwab-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2la8ubsr"/><path class="rphcwab-a"/>`,
		"fallback": "tdesign:file-edit-filled",
	});
}

export default Component;
