import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwx5nsbif.css';
import '../../css/h/hustz32ji.css';
import '../../css/i/ieqi3o5qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwx5nsbif wm-k"/><path class="hustz32ji wm-a"/><path class="ieqi3o5qf wm-a"/>`,
		"fallback": "withicons-bauhaus:clipboard-check",
	});
}

export default Component;
