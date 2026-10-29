import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9ywfyxmo.css';
import '../../css/e/ebjwpkoxt.css';
import '../../css/v/v2i4q_bal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9ywfyxmo wm-k"/><path class="ebjwpkoxt wm-a"/><path class="v2i4q_bal wm-a"/>`,
		"fallback": "withicons-bauhaus:chef-hat",
	});
}

export default Component;
