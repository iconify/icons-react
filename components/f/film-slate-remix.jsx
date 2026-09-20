import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suky8acvb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="suky8acvb"/>`,
		"fallback": "streamline-flex:film-slate-remix",
	});
}

export default Component;
